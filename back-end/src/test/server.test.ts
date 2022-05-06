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

  it("Should fulfill with not found address", async () => {
    const address = await getCepByApi("21920434");

    expect(address).toEqual({
      message: "CEP não encontrado",
      ok: false,
      status: 404,
      statusText: "not_found",
    });
  });

  it("Should fulfill with invalid address", async () => {
    const address = await getCepByApi("111111111");

    expect(address).toEqual({
      message: "CEP informado é inválido",
      ok: false,
      status: 400,
      statusText: "bad_request",
    });
  });

  it("Should fulfill with invalid address", async () => {
    const address = await getCepByApi("111111111");

    expect(address).toEqual({
      message: "CEP informado é inválido",
      ok: false,
      status: 400,
      statusText: "bad_request",
    });
  });
});
