export async function submitToApi<T>(endpoint: string, payload: T) {
  // Swap this stub for fetch(endpoint, { method: "POST", body: JSON.stringify(payload) })
  // when a backend is available.
  await new Promise((resolve) => setTimeout(resolve, 400));
  console.info(`[HSDS] ${endpoint}`, payload);
  return { ok: true as const };
}
