function startInfo(theURL) {
    SpawnWindow(theURL, 'Info');
}
function SpawnWindow(theURL,WindowName,width,height) { 
    if (!width) { width = 650; }
    if (!height) { height = 650; }
    infoWin = window.open(theURL,WindowName,'toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizable=1,width=' + width + ',height=' + height);
    infoWin.focus();
    return false;
}
