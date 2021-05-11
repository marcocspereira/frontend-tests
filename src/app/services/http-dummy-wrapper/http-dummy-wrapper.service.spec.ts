import {
  createHttpFactory,
  HttpMethod,
  SpectatorHttp,
} from '@ngneat/spectator';
import { HttpDummyWrapperService } from './http-dummy-wrapper.service';

xdescribe('HttpDummyWrapperService', () => {
  let spectator: SpectatorHttp<HttpDummyWrapperService>;
  const createHttp = createHttpFactory(HttpDummyWrapperService);

  const mockedEndpoint = 'endpoint/to/somewhere';

  beforeEach(() => (spectator = createHttp()));

  it('should test HttpClient.get', () => {
    spectator.service.get(mockedEndpoint).subscribe();

    /**
     * expectOne() - Expect that a single request was made
     * which matches the given URL and it's method, and return its mock request.
     */
    spectator.expectOne(mockedEndpoint, HttpMethod.GET);
  });
});
