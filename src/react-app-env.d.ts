/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: "development" | "production" | "test"
        readonly REACT_APP_WEBSITE_DOMAIN: string
        readonly REACT_APP_WEBSITE_URL: string
        readonly REACT_APP_DASHBOARD_URL: string
        readonly REACT_APP_API_API_URL: string
        readonly REACT_APP_API_AUTH_URL: string
    }
}