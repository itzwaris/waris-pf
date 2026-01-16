import { useEffect, useState } from "react";

const LANYARD_WS = "wss://api.lanyard.rest/socket";
const LANYARD_API = "https://api.lanyard.rest/v1";

export type DiscordStatus = "online" | "idle" | "dnd" | "offline";

export interface LanyardData {
    discord_user: {
        id: string;
        username: string;
        avatar: string;
        discriminator: string;
        bot: boolean;
        global_name: string;
        avatar_decoration_data: null | {
            asset: string;
            sku_id: string;
        };
        display_name: string;
        public_flags: number;
    };
    discord_status: DiscordStatus;
    active_on_discord_web: boolean;
    active_on_discord_desktop: boolean;
    active_on_discord_mobile: boolean;
    listening_to_spotify: boolean;
    spotify: null | {
        track_id: string;
        timestamps: {
            start: number;
            end: number;
        };
        song: string;
        artist: string;
        album_art_url: string;
        album: string;
    };
    kv: Record<string, string>;
    activities: Array<{
        type: number;
        state: string;
        name: string;
        id: string;
        emoji?: {
            name: string;
            id?: string;
            animated?: boolean;
        };
        created_at: number;
        timestamps?: {
            start: number;
            end?: number;
        };
        application_id?: string;
        assets?: {
            large_image?: string;
            large_text?: string;
            small_image?: string;
            small_text?: string;
        };
        details?: string;
    }>;
}

interface LanyardResponse {
    success: boolean;
    data: LanyardData;
}

export function useLanyard(userId: string) {
    const [data, setData] = useState<LanyardData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Initial fetch
        const fetchData = async () => {
            try {
                const res = await fetch(`${LANYARD_API}/users/${userId}`);
                const body = (await res.json()) as LanyardResponse;
                console.log("Lanyard API Response:", body);
                if (body.success) {
                    setData(body.data);
                } else {
                    console.warn("Lanyard API Error:", body);
                }
            } catch (error) {
                console.error("Lanyard fetch error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // WebSocket connection for real-time updates
        let socket: WebSocket;
        let heartbeatInterval: NodeJS.Timeout;

        const connect = () => {
            socket = new WebSocket(LANYARD_WS);

            socket.onopen = () => {
                // Subscribe to user
                socket.send(
                    JSON.stringify({
                        op: 2,
                        d: {
                            subscribe_to_id: userId,
                        },
                    })
                );
            };

            socket.onmessage = (event) => {
                const msg = JSON.parse(event.data) as {
                    t?: string;
                    d?: any;
                    op: number;
                };

                // INITIAL_STATE or PRESENCE_UPDATE
                if (msg.t === "INIT_STATE" || msg.t === "PRESENCE_UPDATE") {
                    setData(msg.d);
                }

                // Heartbeat
                if (msg.op === 1) {
                    heartbeatInterval = setInterval(() => {
                        if (socket.readyState === WebSocket.OPEN) {
                            socket.send(JSON.stringify({ op: 3 }));
                        }
                    }, msg.d.heartbeat_interval);
                }
            };

            socket.onclose = () => {
                clearInterval(heartbeatInterval);
                // Try to reconnect after 5s
                setTimeout(connect, 5000);
            };
        };

        connect();

        return () => {
            clearInterval(heartbeatInterval);
            if (socket) socket.close();
        };
    }, [userId]);

    const avatarUrl = data?.discord_user?.avatar
        ? `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.${data.discord_user.avatar.startsWith("a_") ? "gif" : "png"}?size=256`
        : null;

    return {
        data,
        loading,
        avatarUrl,
        status: data?.discord_status || "offline",
    };
}
