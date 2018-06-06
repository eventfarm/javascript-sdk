export class OAuthRestClientException extends Error {
    static unableToLoadAccessToken() {
        return new OAuthRestClientException('unable to load access token');
    }
}
