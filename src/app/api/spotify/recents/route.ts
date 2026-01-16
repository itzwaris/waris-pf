import { NextResponse } from "next/server";
import { getRecentlyPlayed } from "@/lib/spotify";

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const response = await getRecentlyPlayed();

        if (response.status === 204 || response.status > 400) {
            console.error("Spotify API Error Status:", response.status);
            const text = await response.text();
            console.error("Spotify API Error Body:", text);
            return NextResponse.json({ isPlaying: false, debugStatus: response.status, debugBody: text });
        }

        const recents = (await response.json()) as { items: any[] };

        const tracks = recents.items.map((item: any) => ({
            artist: item.track.artists.map((_artist: any) => _artist.name).join(", "),
            songUrl: item.track.external_urls.spotify,
            title: item.track.name,
            albumArt: item.track.album.images[0].url,
            playedAt: item.played_at,
        }));

        return NextResponse.json({ tracks });
    } catch (error: any) {
        console.error("Error fetching recently played:", error);
        return NextResponse.json({ isPlaying: false, error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
