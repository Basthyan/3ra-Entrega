//ApiRest
$(document).ready(function () {
  $("#btnCargar").click(function () {
    $.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php",
      function (data) {
        $.each(data.categories, function (i, item) {
          $("#tbody").append(
            "<tr><td>" +
              item.idCategory +
              "</td><td>" +
              item.strCategory +
              "</td><td><img src='" +
              item.strCategoryThumb +
              "'></td><td>" +
              item.strCategoryDescription +
              "</td></tr>"
          );
        });
      }
    );
  });

  $.ajax({
    url: "https://apis.digital.gob.cl/dpa/regiones",
    type: "GET",
    crossDomain: true,
    dataType: "jsonp",
    success: function (data) {
      $.each(data, function (i, item) {
        $("#regionSelect").append(
          "<option value='" + item.codigo + "'>" + item.nombre + "</option>"
        );
      });
    },
    error: function (xhr, status, error) {
      console.log("Error al obtener las regiones: " + error);
    },
  });

  $("#regionSelect").change(function () {
    var idRegion = $("#regionSelect").val();
    $("#comunaSelect").attr("disabled", false);
    $("#comunaSelect").empty();
    $("#comunaSelect").append(
      "<option hidden disable>Seleccione una opción</option>"
    );

    $.ajax({
      url: "https://apis.digital.gob.cl/dpa/regiones/" + idRegion + "/comunas",
      type: "GET",
      crossDomain: true,
      dataType: "jsonp",
      success: function (data) {
        $.each(data, function (i, item) {
          $("#comunaSelect").append(
            "<option value='" + item.codigo + "'>" + item.nombre + "</option>"
          );
        });
      },
      error: function (xhr, status, error) {
        console.log("Error al obtener las comunas: " + error);
      },
    });
  });

  $("#comunaSelect").change(function () {
    var idRegion = $("#regionSelect").val();
    var idComuna = $("#comunaSelect").val();

    // Realiza la lógica necesaria con la comuna seleccionada
  });
});
