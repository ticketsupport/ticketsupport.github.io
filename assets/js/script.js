function copyToClipboard(button) {
    var listItem = button.closest('div');

    var textToCopy = listItem.textContent.trim();

    var textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);

    textarea.select();
    textarea.setSelectionRange(0, 99999); // Для поддержки мобильных устройств

    document.execCommand('copy');

    document.body.removeChild(textarea);
}