$(document).ready(function () {

  function tipCalc(value, custom = false) {
    let percent;
    let tip;
    if (custom) {
      percent = $(".selected").val();
      tip = Number(percent * value * 0.01);
    } else {
      percent = $(".selected").text();
      tip = Number(percent.substring(0, percent.length - 1) * value * 0.01);
    } 
    return Math.trunc(tip * 100) / 100;
  }
  function totalCalc(value, custom = false) {
    let percent;
    let result;
    let pNum = $(".people-num").val();
    if (custom) {
      percent = $(".selected").val();
      result = (percent * value * 0.01) + Number(value / Number(pNum));
    } else {
      percent = $(".selected").text();
      result = (Number(percent.substring(0, percent.length - 1) * value * 0.01) + Number(value / Number(pNum)));
    }
    return Math.trunc(result * 100) / 100;
  }
  function validate(target, custom = false) {
    target.parent().next().remove();
    let value = target.val();
    if (value != "") {
      if (!isNaN(value)) {
        if (value == 0) {
          let err;
          if (custom) {
            err = $('<p style="color:red;font-weight:bold;align-self:end;">! Bill cant be zero </p>')
          }
          else {
            err = $('<p style="color:red;font-weight:bold">! Bill cant be zero </p>')
          }
          target.parent().parent().append(err);
          if (custom) {
            target.css("outline", "3px solid red");
          }
          else {
            target.parent().css("outline", "3px solid red");
          }
        }
        else {
          if (custom) {
            target.css({
              "outline": "3px solid var(--clr-primary-strongCyan)"
            });
          }
          else {
            target.parent().css({
              "outline": "3px solid var(--clr-primary-strongCyan)"
            });
          }
          if (custom) {
            value = $("#bill").val();
            if (value == ""){ 
              $("#tip-amount").text("$ 0.0");
              $("#total").text("$ 0.0");
            }
            else {
              $("#tip-amount").text("$ " + tipCalc(value, custom));
              $("#total").text("$ " + totalCalc(value, custom));
            }
          }
          else {
            $("#tip-amount").text("$ " + tipCalc(value, custom));
            $("#total").text("$ " + totalCalc(value, custom));
          }

        }
      }
      else {
        let err;
        if (custom) {
          err = $('<p style="color:red;font-weight:bold;align-self:end;">! Bill cant be string </p>')
        }
        else {
          err = $('<p style="color:red;font-weight:bold">! Bill cant be string </p>')
        }

        target.parent().parent().append(err);
        if (custom) {
          target.css("outline", "3px solid red");
        }
        else {
          target.parent().css("outline", "3px solid red");
        }
      }
    }
    else {
      if (custom) {
        target.css({
          "outline": "3px solid var(--clr-primary-strongCyan)"
        });
      }
      else {
        target.parent().css({
          "outline": "3px solid var(--clr-primary-strongCyan)"
        });
      }
    }
  }

  $("#bill").keyup(function () {
    let target = $(this);
    validate(target);

  });

  $(".people-num").keydown(function (event) {
    event.preventDefault();
  });

  $(".people-num").change(function (e) {
    let value = $("#bill").val();
    if (value != "") {
      $("#total").text("$ " + totalCalc(value));
    }
  });

  $("input:not(.tip-custom)").focusin(function () {
    let target = $(this);
    $(this).parent().css({
      "outline": "3px solid var(--clr-primary-strongCyan)"
    });
  });

  $("input:not(.tip-custom)").focusout(function () {
    let target = $(this);
    target.parent().css({
      "outline": "none"
    });
    let value = target.val();
    if (value == "" || isNaN(value) || value == 0) {
      target.parent().next().remove();
      target.val("");
      $("#tip-amount").text("$ 0.0");
      $("#total").text("$ 0.0");
    }
  });
  $(".tip").click(function () {
    let target = $(this);
    let value = $("#bill").val();
    if (!target.attr('class').includes("selected")) {
      $(".selected").removeClass("selected");
      target.addClass("selected");
      if (value != "") {
        if (!target.attr('class').includes("tip-custom")) {
          $("#tip-amount").text("$ " + tipCalc(value));
          $("#total").text("$ " + totalCalc(value));
        }
        else {
          $("#tip-amount").text("$ " + tipCalc(value, true));
          $("#total").text("$ " + totalCalc(value, true));
        }
      } else {
        $("#tip-amount").text("$ 0.0");
        $("#total").text("$ 0.0");
      }
    } 
  });
  $(".tip-custom").keyup(function () {
    let target = $(this);
    validate(target, true);
  });
});