$(document).ready(function () {
  $("#zipcode").mask("00000-000");

  $("#btn-search-zipcode").click(() => {
    const zipcode = $("#zipcode").val();
    const endpoint = `https://viacep.com.br/ws/${zipcode}/json`;
    const button = $(this);

    $(this).find("i").addClass("d-none");
    $(this).find("span").removeClass("d-none");

    $.ajax(endpoint).done((res) => {
      console.log(res);
      const publicPlace = res.logradouro;
      const neighborhood = res.bairro;
      const city = res.localidade;
      const state = res.estado;
      const address = `${publicPlace}, ${neighborhood} - ${city} - ${state}`;
      $("#address").val(address);

      setTimeout(() => {
        $(button).find("i").removeClass("d-none");
        $(button).find("span").addClass("d-none");
      }, 2000);
    });
  });
});
