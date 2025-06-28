// You are given an absolute path for a Unix-style file system, which always begins with a slash '/'.
// Your task is to transform this absolute path into its simplified canonical path.
//
// The rules of a Unix-style file system are as follows:
//
// A single period '.' represents the current directory.
// A double period '..' represents the previous/parent directory.
// Multiple consecutive slashes such as '//' and '///' are treated as a single slash '/'.
// Any sequence of periods that does not match the rules above should be treated as a valid directory or file name.
// For example, '...' and '....' are valid directory or file names.
// The simplified canonical path should follow these rules:
//
// TODO: Directories within the path must be separated by exactly one slash '/'.
// TODO: The path must start with a single slash '/'.
//
// Return the simplified canonical path.

export function simplifyPath(path: string): string {
  let cononicalPath = '';

  if (path === '/') {
    return path;
  }

  const chunks = path.split('/');
  const chunksCombined: string[] = [];

  for (let i = 0; i < chunks.length; i++) {
    if (!chunks[i]) {
      continue;
    }
    if (chunks[i] === '.') {
      continue;
    }

    if (chunks[i] === '..') {
      if (chunksCombined.length > 0) {
        chunksCombined.pop();
      }
      continue;
    }

    chunksCombined.push('/' + chunks[i]);
  }

  cononicalPath = chunksCombined.join('');

  return cononicalPath.length ? cononicalPath : '/';
}
