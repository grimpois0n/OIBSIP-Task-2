function convert_temperature() {
    var input_type = document.getElementById("input_type").value;
    var output_type = document.getElementById("output_type").value;
    var input_temperature = parseFloat(document.getElementById("temperature").value);

    if (!isNaN(input_temperature)) {
      var result;
      if (input_type === "celsius") {
        result = (output_type === "fahrenheit") ? (input_temperature * 9/5) + 32 : (output_type === "kelvin") ? input_temperature + 273.15 : input_temperature;
      } else if (input_type === "fahrenheit") {
        result = (output_type === "celsius") ? (input_temperature - 32) * 5/9 : (output_type === "kelvin") ? (input_temperature - 32) * 5/9 + 273.15 : input_temperature;
      } else if (input_type === "kelvin") {
        result = (output_type === "celsius") ? input_temperature - 273.15 : (output_type === "fahrenheit") ? (input_temperature - 273.15) * 9/5 + 32 : input_temperature;
      }

      document.getElementById("result").value = result.toFixed(2);
    } else {
      document.getElementById("result").value = "";
    }
}