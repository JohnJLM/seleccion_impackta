import { useCallback } from 'react';
import { Pokemon } from '../model/Pokemon';

interface UseFetchResult {
    fetchData: <B>(
        endpoint: string,
        params?: {
            method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
            body?: B;
            headers?: HeadersInit;
        }
    ) => Promise<Pokemon | Pokemon[]>;
}

export function useFetch(): UseFetchResult {
    const basePath = 'http://localhost:7768/';

    const fetchData = useCallback(
        async <B>(
            endpoint: string,
            params?: {
                method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
                body?: B;
                headers?: HeadersInit;
            }
        ) => {
            try {
                const { method = 'GET', body, headers } = params || {};

                const response = await fetch(`${basePath}${endpoint}`, {
                    method,
                    headers: {
                        'Content-Type': 'application/json',
                        ...headers,
                    },
                    body: body ? JSON.stringify(body) : undefined,
                });

                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }

                const result = await response.json();

                return result;
            } catch (err) {
                console.log(err as Error);
            }
        },
        [basePath]
    );

    return { fetchData };
}
