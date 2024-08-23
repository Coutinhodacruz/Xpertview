export default function Wedding(props){
    const eventTypes = ["WEDDING", "BIRTHDAY","BURIALS", "OTHERS"]
    const select = document.querySelector('#select');
    eventTypes.forEach(count=>{
         let newOption = document.createElement('option')
         newOption.value = count
         newOption.text= count
         select.appendChild(newOption)
        })
    const states = ['Abia','Adamawa','Akwa Ibom','Anambra','Bauchi','Bayelsa','Benue',
                    'Borno','Cross River','Delta','Ebonyi','Edo','Ekiti','Enugu','Gombe',
                    'Imo','Jigawa','Kaduna','Kano','Katsina','Kebbi','Kogi','Kwara','Lagos',
                    'Nasarawa','Niger','Ogun','Ondo','Osun','Oyo','Plateau','Rivers','Sokoto',
                    'Taraba','Yobe','Zamfara','Abuja']
    states.forEach(option=>{
        const newOption = document.createElement('option');
        newOption.value = option
        newOption.text= option
        select.appendChild(newOption)
    })                
    const text = props;
    return( 
        <div className='bg-gray-200 flex flex-col lg:flex-row gap-5 pb-[1vw]'>
                <p className='bg-gray-400 font-5xl'>
                    Your Wedding,{text}
                </p>
                <div>
                    <select id='select'></select>
                </div>
                <button className='bg-gray-400 rounded-[7px] font-blod text-3xl w-[30px]
                 sm:w-[60px] lg:w-[80px]'>search</button>
    </div>
    )
}