/*!
 * Use JS to hack the GCSE free 2 col template into two rows.
 */
window.__dat = {
  customInitCallback: function () {
    if (document.readyState == 'complete') {
      // Document is ready when CSE element is initialized.
      window.__dat.hackGsceElement();
    } else {
      // Document is not ready yet, when CSE element is initialized.
      google.setOnLoadCallback(function () {
        window.__dat.hackGsceElement()
      }, true);
    }
  },
  hackGsceElement: function () {
    'use strict';
    const targetClasses = {
      gsceTable: 'gsc-search-box',
      gsceInput: 'gsc-input',
      gsceSearchButton: 'gsc-search-button',
      gsceClearButton: 'gsc-clear-button',
    };
    const targetEls = {
      gsceTable: undefined,
      gsceInput: undefined,
      gsceSearchButton: undefined,
      gsceClearButton: undefined,
    };
    const gsceInputBoxClass = 'gsc-input-box';
    const gsceInputBoxMargin = 8;
    for (const targetElKey in targetClasses) {
      if (targetClasses[targetElKey] !== targetClasses.gsceTable) {
        const className = targetClasses[targetElKey];
        const queryString = `table.${targetClasses.gsceTable} td.${className}`;
        targetEls[targetElKey] = document.querySelector(queryString);
      } else {
        const queryString = `table.${targetClasses.gsceTable}`;
        targetEls[targetElKey] = document.querySelector(queryString);
      }
    }

    for (const targetElKey in targetEls) {
      if (targetClasses[targetElKey] !== targetClasses.gsceTable) {
        const targetEl = targetEls[targetElKey];
        const targetElClassListStr = targetEl.classList.value;
        const newRowEl = document.createElement('tr');
        for (const className of targetElClassListStr.split(' ')) {
          newRowEl.classList.add(className);
        }

        while (targetEl.childNodes.length > 0) {
          newRowEl.appendChild(targetEl.childNodes[0]);
        }

        targetEls.gsceTable.appendChild(newRowEl);
      }
    }

    // Move the search button to the right.
    document.querySelector(`tr.${targetClasses.gsceSearchButton}`).style.float = 'right';
    
    // Add Margin to bottom of the search input box
    document.querySelector(`.${gsceInputBoxClass}`).style.marginBottom = `${gsceInputBoxMargin}px`;
  }
}
