export const replaceFirst = (value: string, searcher: string, replacer: string): string => {
  let indexOfSearch = value.indexOf(searcher);
  if (indexOfSearch === -1) {
    return value;
  }
  let before = value.substring(0, indexOfSearch);
  let after = value.substring(indexOfSearch + searcher.length);
  return before.concat(replacer).concat(after);
}
