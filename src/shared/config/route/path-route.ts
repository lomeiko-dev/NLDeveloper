enum path{
    "ADMIN" = "admin",
    "MAIN" = "main",
    "BLOG" = "blog",
    "PROJECT" = "project",
    "NOTFOUND" = "notFound",
    "NOTAUTH" = "notAuth",
}

export const pathRoute: Record<path, string> = {
    [path.ADMIN]: "/admin",
    [path.MAIN]: "/main",
    [path.BLOG]: "/blog",
    [path.PROJECT]: "/project",
    [path.NOTFOUND]: "/not-found",
    [path.NOTAUTH]: "/not-auth",
}
