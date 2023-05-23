const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {return true
       
    }
}

const verticalJoin = letters[0].map((_, colIndex) =>
letters.map(row => row[colIndex]).join('')
);

for (const column of verticalJoin) {
if (column.includes(word)) {
  return true;
}
}

return false;
};

module.exports = wordSearch