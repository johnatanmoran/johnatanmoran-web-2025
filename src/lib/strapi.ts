interface Props {
	endpoint: string;
	query?: Record<string, string>;
	wrappedByKey?: string;
	wrappedByList?: boolean;
}

/**
 * Obtiene datos de la API de Strapi.
 * @param endpoint - El endpoint para realizar la consulta
 * @param query - Los parámetros de consulta para agregar a la URL
 * @param wrappedByKey - La clave para desempaquetar la respuesta
 * @param wrappedByList - Si la respuesta es una lista, desempaquétala.
 * @returns
 */
export default async function fetchApi<T>({
	endpoint,
	query,
	wrappedByKey,
	wrappedByList,
}: Props): Promise<T> {
	if (endpoint.startsWith("/")) {
		endpoint = endpoint.slice(1);
	}

	const url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}`);

	console.log("URL:", url.toString());

	if (query) {
		Object.entries(query).forEach(([key, value]) => {
			url.searchParams.append(key, value);
		});
	}
	const res = await fetch(url.toString(), {
		headers: {
			Authorization: `Bearer ${import.meta.env.STRAPI_TOKEN}`,
			"Content-Type": "application/json",
		},
	});

	let data = await res.json();

	console.log("RAW-DATA:", data);

	if (wrappedByKey) {
		data = data[wrappedByKey];
	}

	if (wrappedByList) {
		data = data[0];
	}

	return data as T;
}
