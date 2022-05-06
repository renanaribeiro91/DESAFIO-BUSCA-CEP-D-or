import { getCepByApi } from "../services";

describe('When invoked with a valid "21920430" string', () => {
  it("Should fulfill with correct address", async () => {
    const address = await getCepByApi("21920430");

    expect(address).toEqual({
      address: "Rua Fernando de Azevedo",
      city: "Rio de Janeiro",
      code: "21920-430",
      district: "Portuguesa",
      ok: true,
      state: "RJ",
      status: 200,
      statusText: "ok",
    });
  });
});
