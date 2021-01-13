function makeBuffer(){
	var array=[];
	
	return{
		add: function(value){
			array.push(value);
			return array;
		},
		print: function(){
			let array1= array.join();
			while(array1.includes(',')){
				array1 = array1.replace(',', ' ')
			}
			return console.log(array1);
		},
		clear: function(){
			return  array.length=0;
		
		
		}	
	}	
}
var buffer = makeBuffer(); 
buffer.add( 'JavaScript');
buffer.add( 'We Need');
buffer.add( 'To Learn!'); 

buffer.print(); 

buffer.clear(); 
buffer.print();
buffer.add( 1);
buffer.add( 2 );
buffer.add( 3); 

buffer.print(); 