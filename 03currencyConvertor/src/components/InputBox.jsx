import React, { useCallback, useId, useState } from "react";

function InputBox({
  label,
  amount,
  // this is fun received as props
  onAmountChange,
  isAmountDisable = false,
  onCurrencyChange,
  CurrencyOptions = [],
  selectCurency = "INR",
}) {
  const inputId = useId();
  const seleceId = useId();

  // console.log(selectCurency);

  return (
    <>
      <div className="mainInput w-full border p-3 border-collapse rounded-md">
        <div className="label text-white flex justify-between ps-1.5  w-[19rem]">
          <label htmlFor={inputId}>{label}</label>
          <label htmlFor={seleceId}>Select Currency</label>
        </div>
        <div className="amount flex gap-5 ">
          <input
            type="number"
            id={inputId}
            placeholder="Amount"
            value={amount}
            onChange={(e) =>
              // passed change amount to onANountChange funtion
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            className="p-2 rounded-lg "
            disabled={isAmountDisable}
          />

          <select
            id={seleceId}
            className="rounded-lg p-2"
            // defaultValue={selectCurency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value.toUpperCase())
            }
            value={selectCurency}
          >
            {CurrencyOptions.map((currency) => (
              // render option element for each CurrencyOptions array
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
export default InputBox;
