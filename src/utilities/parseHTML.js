const parseHTML = (string) => {
  const doc = new DOMParser().parseFromString(string , 'text/html');
  return doc.body.textContent;
}

export default parseHTML;