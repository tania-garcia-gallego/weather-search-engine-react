import React from "react";

export default function Form() {
  return (
    <div className="Form">
      <div>
        <div class="col"></div>
        <form>
          <div class="mb-3"></div>
          <input placeholder="Enter a city" id="search-input" />
          <button type="submit" class="btn btn-primary">
            Search city
          </button>
        </form>
      </div>
    </div>
  );
}
