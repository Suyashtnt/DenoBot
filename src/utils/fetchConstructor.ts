export default async (url: string, type: string): Promise<any> => {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": type,
        },
    });
    return response.json();
}