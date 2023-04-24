import { renderHook, waitFor } from "@testing-library/react";
import useFetchData from "./useFetchData";

global.fetch = jest.fn();

describe("useFetchData", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return the initial values for `data`, error and loading", async () => {
    const { result } = renderHook(() => useFetchData());
    const { data, error, loading } = result.current;

    // this being not wrapped in a waitFor causes the act errors in the console.
    expect(data).toBe(null);
    expect(error).toBe(null);
    expect(loading).toBe(true);
  });

  describe("when data is fetched successfully", () => {
    let mockedData;

    beforeEach(() => {
      mockedData = [
        {
          message: {
            affenpinscher: [],
            african: [],
            airedale: [],
            akita: [],
            appenzeller: [],
            australian: ["shepherd"],
            basenji: [],
            beagle: [],
            bluetick: [],
            borzoi: [],
            bouvier: [],
            boxer: [],
            brabancon: [],
            briard: [],
            buhund: ["norwegian"],
            bulldog: ["boston", "english", "french"],
            bullterrier: ["staffordshire"],
            cattledog: ["australian"],
            chihuahua: [],
            chow: [],
            clumber: [],
            cockapoo: [],
            collie: ["border"],
            coonhound: [],
            corgi: ["cardigan"],
            cotondetulear: [],
            dachshund: [],
            dalmatian: [],
            dane: ["great"],
            deerhound: ["scottish"],
            dhole: [],
            dingo: [],
            doberman: [],
            elkhound: ["norwegian"],
            entlebucher: [],
            eskimo: [],
            finnish: ["lapphund"],
            frise: ["bichon"],
            germanshepherd: [],
            greyhound: ["italian"],
            groenendael: [],
            havanese: [],
            hound: [
              "afghan",
              "basset",
              "blood",
              "english",
              "ibizan",
              "plott",
              "walker",
            ],
            husky: [],
            keeshond: [],
            kelpie: [],
            komondor: [],
            kuvasz: [],
            labradoodle: [],
            labrador: [],
            leonberg: [],
            lhasa: [],
            malamute: [],
            malinois: [],
            maltese: [],
            mastiff: ["bull", "english", "tibetan"],
            mexicanhairless: [],
            mix: [],
            mountain: ["bernese", "swiss"],
            newfoundland: [],
            otterhound: [],
            ovcharka: ["caucasian"],
            papillon: [],
            pekinese: [],
            pembroke: [],
            pinscher: ["miniature"],
            pitbull: [],
            pointer: ["german", "germanlonghair"],
            pomeranian: [],
            poodle: ["medium", "miniature", "standard", "toy"],
            pug: [],
            puggle: [],
            pyrenees: [],
            redbone: [],
            retriever: ["chesapeake", "curly", "flatcoated", "golden"],
            ridgeback: ["rhodesian"],
            rottweiler: [],
            saluki: [],
            samoyed: [],
            schipperke: [],
            schnauzer: ["giant", "miniature"],
            segugio: ["italian"],
            setter: ["english", "gordon", "irish"],
            sharpei: [],
            sheepdog: ["english", "shetland"],
            shiba: [],
            shihtzu: [],
            spaniel: [
              "blenheim",
              "brittany",
              "cocker",
              "irish",
              "japanese",
              "sussex",
              "welsh",
            ],
            spitz: ["japanese"],
            springer: ["english"],
            stbernard: [],
            terrier: [
              "american",
              "australian",
              "bedlington",
              "border",
              "cairn",
              "dandie",
              "fox",
              "irish",
              "kerryblue",
              "lakeland",
              "norfolk",
              "norwich",
              "patterdale",
              "russell",
              "scottish",
              "sealyham",
              "silky",
              "tibetan",
              "toy",
              "welsh",
              "westhighland",
              "wheaten",
              "yorkshire",
            ],
            tervuren: [],
            vizsla: [],
            waterdog: ["spanish"],
            weimaraner: [],
            whippet: [],
            wolfhound: ["irish"],
          },
          status: "success",
        },
      ];

      global.fetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockedData),
      });
    });

    it("should return data", async () => {
      const { result } = renderHook(() => useFetchData());

      await waitFor(() =>
        expect(result.current).toEqual({
          data: mockedData,
          error: null,
          loading: false,
        })
      );
    });

    describe("the loading property", () => {
      it("should initially return true and then false", async () => {
        const { result } = renderHook(() => useFetchData());
        const { loading } = result.current;
        expect(loading).toBe(true);
        await waitFor(() => {
          const { loading } = result.current;
          expect(loading).toBe(false);
        });
      });
    });
  });

  describe("when data is not fetched successfully", () => {
    const mockedError = new Error("mocked error");

    beforeEach(() => {
      fetch.mockRejectedValue(mockedError);
    });

    it("should return the Error", async () => {
      const { result } = renderHook(() => useFetchData());

      await waitFor(() => {
        const { error } = result.current;
        expect(error).toBe(mockedError);
      });
    });
  });

  describe("should abort the fetch request on unmount", () => {
    const mockedAbortController = {
      abort: jest.fn(),
    };

    beforeEach(() => {
      global.AbortController = jest.fn(() => mockedAbortController);
    });

    it("should abort the fetch request", async () => {
      const { unmount } = renderHook(() => useFetchData());
      unmount();

      expect(mockedAbortController.abort).toHaveBeenCalled();
    });
  });
});
