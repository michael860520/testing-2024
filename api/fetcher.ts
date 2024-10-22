import type { UseFetchOptions } from 'nuxt/app'

export async function fetcher<T>(
  endpoint: string,
  options: UseFetchOptions<T> = {},
): Promise<T> {
  try {
    const defaultHeaders = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic dGVzdDpibnM=',
    }

    const mergedOptions = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    }

    const fullUrl = new URL(endpoint, 'https://test-hk.buynship.com').toString()

    const { data, error } = await useFetch(fullUrl, mergedOptions)

    if (error.value) {
      throw new Error(
        error.value?.data?.error
        || 'An unknown error occurred during data fetching.',
      )
    }

    if (!data.value) {
      throw new Error('No data returned from the fetch operation.')
    }

    return data.value as T
  }
  catch (err: any) {
    throw new Error(err.message || 'An error occurred during data fetching.')
  }
}
