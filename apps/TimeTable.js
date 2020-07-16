var ProfKey = {'SG': 'Dr Sanjay Garg', 'PRS': 'Dr. Priyanka Sharma', 'MDB': 'Dr. Madhuri Bhavsar', 'KPA': 'Dr. K P Agrawal', 'GR': 'Dr. Gaurang Raval', 'SV': 'Dr. Sharada Valiveti', 'VU': 'Dr. Vijay Ukani', 'AT': 'Dr. Ankit Thakkar', 'PBT': 'Dr. Priyank B Thakkar', 'ZAN': 'Dr. Zunnun Narmawala', 'ST': 'Dr. Sudeep Tanwar', 'SJ': 'Dr. Swati Jain', 'JV': 'Dr. Jaiprakash Verma', 'TU': 'Prof. Tejal Upadhyay', 'SP': 'Dr. Saurin Parikh', 'SM': 'Prof. Sonia Mittal', 'DS': 'Prof. Deepika Shukla', 'SA': 'Prof. Smita Agrawal', 'RBM': 'Prof Rasendu Mishra', 'MS': 'Prof Monika Shah', 'RAK': 'Prof Rupal A Kapdi', 'PVK': 'Prof. Priti Kathiria', 'PPS': 'Prof. Pooja P Shah', 'VUP': 'Prof. Vishal U. Parikh', 'PRO': 'Prof Parita Oza', 'MKK': 'Prof. Malaram K Kumhar', 'JAP': 'Prof Jigna A Patel', 'RD': 'Dr.Rajan Datt', 'VD': 'Prof. Devendra Vashi', 'AMP': 'Prof. Ajay M Patel', 'KRL': 'Prof Kruti Lavingia', 'VC': 'Prof. Vipul Chudasama', 'RS': 'Prof. Rushabh Shah', 'JP': 'Prof Jitali Patel', 'UDP': 'Prof. Usha Patel', 'PSK': 'Prof Pimal Khanpara', 'SHM': 'Prof. Sapan Mankad', 'TKV': 'Prof Tarjni Vyas', 'SD': 'Prof. Shivani Desai', 'DSJ': 'Prof. Dhaval S Jha', 'VKP': 'Prof. Vivek K Prasad', 'DB': 'Prof. Dvijesh Bhatt', 'AN': 'Prof. Anuja Nair', 'DV': 'Prof. Daiwat Vyas', 'AVM': 'Prof. Anitha Modi', 'LG': 'Prof. Lata Gohil', 'PAP': 'Prof. Preksha A Pareek', 'CT': 'Prof. Chandan Trivedi', 'KT': 'Prof. Kavita Tewani', 'CVN': 'Prof. Chirag Nathwani', 'PB': 'Prof. Pronoya Bhattacharya', 'USB': 'Prof. Umesh Bodkhe', 'BS': 'Prof. Bhavin Shah', 'SSD': 'Prof. Smita S Darandale ', 'RM': 'Prof Rachana Mehta', 'AV': 'Prof. Ashwin Verma', 'PS': 'Prof. Prachi Singh', 'JS': 'Prof. Shruti Jadon', 'DP': 'Prof. Devyani Patil', 'MZ': 'Mohd Zuhair', 'MPSV': 'Dr. Param Shivam Vellala', 'MSM': 'Dr Samir Mahajan', 'MRM': 'Dr Richa Mishra', 'MKBP': 'Prof Kunal Pathak', 'TAMB': 'Ms. MADHUSHREE B', 'MMP': 'Dr. Motilal Panigrahi', 'UE': 'UE', 'TAKC': 'Ms Kinjal Chaudhari', 'TART': 'Ms. Riddhi Thakkar', 'TARL': 'Ms. Ritika Lohiya', 'TAPR': 'Ms. Pooja Revar', 'TAJH': 'Ms. Jigna Hathaliya', 'TAJS': 'Ms Juhi Shah', 'TARG': 'Mr. Rajesh Gupta', 'MDP': 'Dr. Dhiren Pandit', 'MAJ': 'Prof. Akash Joshi', 'MSHM': 'Dr. Sandeep Malhotra', 'TAAK': 'Ms Aparna Kumari', 'TAMT': 'Ms Meenaxi Tank', 'VF': 'VF', 'MPS': 'Prof Pronoy Singha', 'IE': 'IE', 'MHAD': 'ARJUN DHAR', 'RKD': 'Prof Dewangan Ram Kishan ', 'VFDG': 'Prof. Dipti Gadhvi', 'VFMR': 'Prof. Ruchi Mankad ', 'VFTS': 'Prof Twinkle Singhal', 'MTAP': 'Prof. Amisha Patel', 'MSG': 'Prof. Shubhansi Gupta', 'VFNM': 'Nikita Macwan', 'VFDS': 'Deepika Swaika', 'MAPT': 'MAPT', 'MBY': 'Prof. Bijal Yeolekar'}


var SubjectCodes = {"ML":"Machine Learning","SE":"Software Engineering","DAA":"Design and Analysis of Algorithms","CN":"Computer Networks"};

BCEC = ['OE','OE','ML','LAB','OE','OE','OE','OE','SE','LAB','TUT','TUT','OE','OE','CN','DAA','SE','','','OE','OE','CN','LAB','','','OE','OE','DAA','CN','ML','','','SE','ML','TUT','LAB','',''];

var BCECProf = {
    'ML':'RAK',
    'SE':'SSD',
    'CN':'VU',
    'DAA':'DSJ'
}

var PDTut = ['Prof. Anuja Nair','Prof. P.N.Kapil','Prof. H.Kapadia,Prof','Pronoy Bhattacharya']


C1 = ['DAA','CN','SE','ML']
C1Prof = ['DSJ','USB','MZ','TAMT']
C2 = ['SE','ML','CN','DAA']
C2Prof = ['MZ','TAMT','TARG','CT']
C3 = ['ML','DAA','SE','CN']
C3Prof = ['RAK','CT','PRS','CT']
C4 = ['CN','SE','DAA','ML']
C4Prof = ['ZAN','MZ','SG','TAJS']

CT1 = ['DAA','','']
CT1Prof = 'SG'
CT2 = ['','DAA','']
CT2Prof = 'SG'
CT3 = ['','DAA','']
CT3Prof = 'JP'
CT4 = ['','','DAA']
CT4Prof = 'DSJ'


var dismanprof = ['Prof. Anant Patel','Prof. Anant Patel','Prof. Alka Shah']

var Electives = 
{
    'PD' :['','','','','','','Personality Development','TUT','Personality Development','','',''],
    'IL' : ['','','','','','','Introduction to Literature','Introduction to Literature','Introduction to Literature','','',''],
    'MCS' : ['','','Media,Culture and Society','Media,Culture and Society','','','','','','Media,Culture and Society','',''],
    'TW' : ['','','','','','','Technical Writing','Technical Writing','Technical Writing','','',''],
    'EV' : ['','','','','','','Ethics and Values','Ethics and Values','Ethics and Values','','',''],
    'GC' : ['','','','','','','Gender Communication','Gender Communication','Gender Communication','','',''],
    'MIH' : ['','','Modern Indian History','Modern Indian History','','','','','','Modern Indian History','',''],
    'IRM' : ['Introduction to Research Methodology','Introduction to Research Methodology','','','Introduction to Research Methodology','','','','','','',''],
    'ME' : ['MATLAB for Engineers','MATLAB for Engineers','','','','','','','','','',''],
    'IE' : ['','','','','','','','','','','Introduction to Econometrics','Introduction to Econometrics'],
    'DM' : ['Disaster Management','Disaster Management','','','Disaster Management','','','','','','',''],
    'OB' : ['Organisational Behaviour','Organisational Behaviour','','','','','','','','','',''],
    'BQM' : ['Basics of Quality Management','Basics of Quality Management','','','','Basics of Quality Management','','','','','',''],

}
var ElectiveProf =
{
    'PD' :'Prof. Dhaval Pujara',
    'IL' : 'Prof. Pronoy Singha',
    'MCS' : 'Prof. Ratna Rao',
    'TW' : 'Prof. Ratna Rao',
    'EV' : 'Prof. Akash Joshi',
    'GC' : 'Prof. Richa Mishra',
    'DM' : 'Prof. Anant Patel/Prof. Alka Shah', 
    'MIH' : 'Prof. Akash Joshi',
    'IRM' : 'Prof. Dhaval Pujara',
    'ME' : 'Prof. Twinkle Bhavsar',
    'IE' : 'Prof. Paramshivam Vella',
    'OB' : 'Prof. Parul Bhatti',
    'BQM' : 'Prof. Anand Patel',
}
function myFunction() {
    var division = document.getElementById("Div").value;
    var subdiv = document.getElementById("SubDiv").value;
    var tutdiv = document.getElementById("TutDiv").value;
    var E1 = document.getElementById("E1").value;
    var E1D = document.getElementById("E1D").value;
    var E2 = document.getElementById("E2").value;
    var E2D = document.getElementById("E2D").value;
    var table = document.getElementById("MyTable");
    var i = 0;
    var labctr = 0;
    var tutctr = 0;
    var electr = 0;
    var dismanctr = 0;
    var r=1;
    while(row=table.rows[r++])
    {
      var c=1;
      while(cell=row.cells[c++])
      { cell.innerHTML='';
      $(cell).css("background-color", "");

    }
}

if(division=='C') {
    r=1;
    while(row=table.rows[r++])
    {
      c=1;
      while(cell=row.cells[c++])
      {

        if(BCEC[i] == "LAB") {
            if(subdiv == 1){
                cell.innerHTML= SubjectCodes[C1[labctr]] + "<br> <b>LAB</b> <br> <i>" + ProfKey[C1Prof[labctr]] + "</i>" ;
                $(cell).css("background-color", "#f0f2eb");
                labctr++;
                i++;
            }
            if(subdiv == 2){
                cell.innerHTML=SubjectCodes[C2[labctr]] + "<br> <b>LAB</b> <br> <i>"  + ProfKey[C2Prof[labctr]] + "</i>" ;
                $(cell).css("background-color", "#f0f2eb");
                labctr++;
                i++;
            }
            if(subdiv == 3){
                cell.innerHTML=SubjectCodes[C3[labctr]] + "<br> <b>LAB</b> <br> <i>"  + ProfKey[C3Prof[labctr]] + "</i>";
                $(cell).css("background-color", "#f0f2eb");
                labctr++;
                i++;
            }
            if(subdiv == 4){
                cell.innerHTML=SubjectCodes[C4[labctr]] + "<br> <b>LAB</b> <br> <i>"  + ProfKey[C4Prof[labctr]] + "</i>";
                $(cell).css("background-color", "#f0f2eb");
                labctr++;
                i++;
            }

        }
        else if(BCEC[i] == "TUT") {
            if(tutdiv == 1){
                if(CT1[tutctr]!=''){
                    cell.innerHTML=SubjectCodes[CT1[tutctr]] + "<br> <b>TUTORIAL</b>" + "<br> <i>"  + ProfKey[CT1Prof] + "</i>";
                    $(cell).css("background-color", "#f0eae6");
                }
                tutctr++;
                i++;
            }
            if(tutdiv == 2){
                if(CT2[tutctr]!=''){
                    cell.innerHTML=SubjectCodes[CT2[tutctr]] + "<br> <b>TUTORIAL</b>" + "<br> <i>"  + ProfKey[CT2Prof] + "</i>";
                    $(cell).css("background-color", "#f0eae6");
                }
                tutctr++;
                i++;
            }
            if(tutdiv == 3){
                if(CT3[tutctr]!=''){
                    cell.innerHTML=SubjectCodes[CT3[tutctr]] + "<br> <b>TUTORIAL</b>" + "<br> <i>"  + ProfKey[CT3Prof] + "</i>";
                    $(cell).css("background-color", "#f0eae6");
                }
                tutctr++;
                i++;
            }
            if(tutdiv == 4){
                if(CT4[tutctr]!=''){
                    cell.innerHTML=SubjectCodes[CT4[tutctr]] + "<br> <b>TUTORIAL</b>" + "<br> <i>"  + ProfKey[CT4Prof] + "</i>";
                    $(cell).css("background-color", "#f0eae6");

                }
                tutctr++;
                i++;
            }

        }
        else if (BCEC[i] == "OE") {
            Elective1 = Electives[E1];
            Elective2 = Electives[E2];
            if(Elective1[electr] == 'Disaster Management' ) {
                cell.innerHTML = Elective1[electr] + '<br> <i>' + dismanprof[dismanctr] + '</i>';
                $(cell).css("background-color", "#e6eef0");
                electr++;
                i++;
                dismanctr++;
            }

            else if(Elective1[electr]!='') {
                cell.innerHTML = Elective1[electr] + '<br> <i>' + ElectiveProf[E1] + '</i>';
                $(cell).css("background-color", "#e6eef0");
                
                electr++;
                i++;
            }
            else if(Elective2[electr]!='') {

                if(Elective2[electr]=='TUT') {
                    cell.innerHTML = 'Personality Development <br> <b>TUTORIAL</b> ' + '<br> <i>' + PDTut[E2D] + '</i>';
                    $(cell).css("background-color", "#f0eae6");
                    electr++;
                    i++;
                }
                else {
                    cell.innerHTML = Elective2[electr] + '<br> <i>' + ElectiveProf[E2] + '</i>';
                    $(cell).css("background-color", "#e6eef0");
                    electr++;
                    i++;
                }
            }
            else {
                electr++;
                i++;
            }

        }
        else {
            if(BCEC[i]!='') {
                cell.innerHTML=SubjectCodes[BCEC[i]] + '<br> <i>' + ProfKey[BCECProf[BCEC[i]]] + '<i>';
            }
            i = i+1; 
        }
      }
    }

}
}

function capture() {

    html2canvas(document.querySelector("#imgcap"),{scrollY: -window.pageYOffset}).then(canvas => {
        saveAs(canvas.toDataURL(), 'Timetable.png');
    });
}

function saveAs(uri, filename) {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

    } else {

        window.open(uri);

    }
}

