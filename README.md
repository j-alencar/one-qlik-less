# one-qlik-less
Simple addon workaround for directly CTRL+C-ing data cells in Qlik Sense. Searches the DOM for elements with the :focus pseudo-class and feeds their text to the clipboard. Seems to work for most table-like objects -- with the exception of filter panels, for some reason.

Be sure you're on HTTPS as the Clipboard API only works with that!
