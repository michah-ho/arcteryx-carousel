import useFetch from "./useFetch";
import { renderHook } from "@testing-library/react-hooks";

describe("Tests for useFetch custom hook", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("Should set the state of data when a good url and params are passed in", async () => {
    const mockResponse = {
      data: [{ img: "http://fake.com/donuts.jpg" }],
    };
    const mockUrl = "http:/fake.com";
    fetch.mockResponseOnce(JSON.stringify(mockResponse));
    const { result, waitForNextUpdate } = renderHook(() => useFetch(mockUrl));
    const expectedData = { data: mockResponse.data};
    const expectedLoading = false;
    await waitForNextUpdate();
    expect(result.current.state.data).toEqual(expectedData);
    expect(result.current.state.loading).toEqual(expectedLoading);
  });
});
