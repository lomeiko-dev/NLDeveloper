export const getDeviceId = (): string => {
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;
    return `${userAgent}-${platform}`
}