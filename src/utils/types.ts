export type THello = {
    healthcheck: string,
}

export type TOrigin = {
    origin: string,
}

export type TTestTimingReturn = {
    testTimingMsg: string,
}

export type TJSONPlaceholder = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export type TJSONPlaceholderReturn = {
    apiToCall: string,
    data: TJSONPlaceholder[],
}

export type TOriginInfoReturn = {
    client_origin: string,
    server_host: string,
}