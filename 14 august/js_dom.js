const center = document.createElement('center'); 
  

const ChessTable = document.createElement('table'); 
for (let i = 0; i < 8; i++) { 
    const tr = document.createElement('tr'); 
    for (let j = 0; j < 8; j++) { 
  
        
        const td = document.createElement('td'); 
  
        
        if ((i + j) % 2 == 0) { 
            td.setAttribute('class', 'cell whitecell'); 
            tr.appendChild(td); 
        } 
  
        else { 
            td.setAttribute('class', 'cell blackcell');  
            tr.appendChild(td); 
        } 
    } 
    ChessTable.appendChild(tr); 
} 
center.appendChild(ChessTable);  
ChessTable.setAttribute('cellspacing', '0'); 
ChessTable.setAttribute('width', '270px'); 
document.body.appendChild(center);