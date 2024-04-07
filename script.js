import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const queryParamsContainer = document.querySelector("[data-query-params]");
const requestHeadersContainer = document.querySelector(
  "[data-request-headers]"
);
const keyValueTempalate = document.querySelector("[data-key-value-template]");

document
  .querySelector("[data-add-query-params-btn]")
  .addEventListener("click", () => {
    queryParamsContainer.append(createKeyValuePair());
  });
document
  .querySelector("[data-add-request-headers-btn]")
  .addEventListener("click", () => {
    requestHeadersContainer.append(createKeyValuePair());
  });

const createKeyValuePair = () => {
  const element = keyValueTempalate.content.cloneNode(true);
  element
    .querySelector("[data-remove-btn]")
    .addEventListener("click", (event) => {
      event.target.closest("[data-key-value-pair]").remove();
    });
  return element;
};

queryParamsContainer.append(createKeyValuePair());
requestHeadersContainer.app