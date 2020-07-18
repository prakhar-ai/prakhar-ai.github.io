var ProfKey = {'SG': 'Dr Sanjay Garg', 'PRS': 'Dr. Priyanka Sharma', 'MDB': 'Dr. Madhuri Bhavsar', 'KPA': 'Dr. K P Agrawal', 'GR': 'Dr. Gaurang Raval', 'SV': 'Dr. Sharada Valiveti', 'VU': 'Dr. Vijay Ukani', 'AT': 'Dr. Ankit Thakkar', 'PBT': 'Dr. Priyank B Thakkar', 'ZAN': 'Dr. Zunnun Narmawala', 'ST': 'Dr. Sudeep Tanwar', 'SJ': 'Dr. Swati Jain', 'JV': 'Dr. Jaiprakash Verma', 'TU': 'Prof. Tejal Upadhyay', 'SP': 'Dr. Saurin Parikh', 'SM': 'Prof. Sonia Mittal', 'DS': 'Prof. Deepika Shukla', 'SA': 'Prof. Smita Agrawal', 'RBM': 'Prof Rasendu Mishra', 'MS': 'Prof Monika Shah', 'RAK': 'Prof Rupal A Kapdi', 'PVK': 'Prof. Priti Kathiria', 'PPS': 'Prof. Pooja P Shah', 'VUP': 'Prof. Vishal U. Parikh', 'PRO': 'Prof Parita Oza', 'MKK': 'Prof. Malaram K Kumhar', 'JAP': 'Prof Jigna A Patel', 'RD': 'Dr.Rajan Datt', 'VD': 'Prof. Devendra Vashi', 'AMP': 'Prof. Ajay M Patel', 'KRL': 'Prof Kruti Lavingia', 'VC': 'Prof. Vipul Chudasama', 'RS': 'Prof. Rushabh Shah', 'JP': 'Prof Jitali Patel', 'UDP': 'Prof. Usha Patel', 'PSK': 'Prof Pimal Khanpara', 'SHM': 'Prof. Sapan Mankad', 'TKV': 'Prof Tarjni Vyas', 'SD': 'Prof. Shivani Desai', 'DSJ': 'Prof. Dhaval S Jha', 'VKP': 'Prof. Vivek K Prasad', 'DB': 'Prof. Dvijesh Bhatt', 'AN': 'Prof. Anuja Nair', 'DV': 'Prof. Daiwat Vyas', 'AVM': 'Prof. Anitha Modi', 'LG': 'Prof. Lata Gohil', 'PAP': 'Prof. Preksha A Pareek', 'CT': 'Prof. Chandan Trivedi', 'KT': 'Prof. Kavita Tewani', 'CVN': 'Prof. Chirag Nathwani', 'PB': 'Prof. Pronoya Bhattacharya', 'USB': 'Prof. Umesh Bodkhe', 'BS': 'Prof. Bhavin Shah', 'SSD': 'Prof. Smita S Darandale ', 'RM': 'Prof Rachana Mehta', 'AV': 'Prof. Ashwin Verma', 'PS': 'Prof. Prachi Singh', 'JS': 'Prof. Shruti Jadon', 'DP': 'Prof. Devyani Patil', 'MZ': 'Mohd Zuhair', 'MPSV': 'Dr. Param Shivam Vellala', 'MSM': 'Dr Samir Mahajan', 'MRM': 'Dr Richa Mishra', 'MKBP': 'Prof Kunal Pathak', 'TAMB': 'Ms. MADHUSHREE B', 'MMP': 'Dr. Motilal Panigrahi', 'UE': 'UE', 'TAKC': 'Ms Kinjal Chaudhari', 'TART': 'Ms. Riddhi Thakkar', 'TARL': 'Ms. Ritika Lohiya', 'TAPR': 'Ms. Pooja Revar', 'TAJH': 'Ms. Jigna Hathaliya', 'TAJS': 'Ms Juhi Shah', 'TARG': 'Mr. Rajesh Gupta', 'MDP': 'Dr. Dhiren Pandit', 'MAJ': 'Prof. Akash Joshi', 'MSHM': 'Dr. Sandeep Malhotra', 'TAAK': 'Ms Aparna Kumari', 'TAMT': 'Ms Meenaxi Tank', 'VF': 'VF', 'MPS': 'Prof Pronoy Singha', 'IE': 'IE', 'MHAD': 'ARJUN DHAR', 'RKD': 'Prof Dewangan Ram Kishan ', 'VFDG': 'Prof. Dipti Gadhvi', 'VFMR': 'Prof. Ruchi Mankad ', 'VFTS': 'Prof Twinkle Singhal', 'MTAP': 'Prof. Amisha Patel', 'MSG': 'Prof. Shubhansi Gupta', 'VFNM': 'Nikita Macwan', 'VFDS': 'Deepika Swaika', 'MAPT': 'MAPT', 'MBY': 'Prof. Bijal Yeolekar'}


var SubjectCodes = {"ML":"Machine Learning","SE":"Software Engineering","DAA":"Design and Analysis of Algorithms","CN":"Computer Networks"};

BCEC = ['OE','OE','ML','LAB','OE','OE','OE','OE','SE','LAB','TUT','TUT','OE','OE','CN','DAA','SE','','','OE','OE','CN','LAB','','','OE','OE','DAA','CN','ML','','','SE','ML','TUT','LAB','',''];

var BCECProf = {
    'ML':'RAK',
    'SE':'SSD',
    'CN':'VU',
    'DAA':'DSJ'
}

var BCEAProf = {
    'ML':'PBT',
    'SE':'DV',
    'CN':'ZAN',
    'DAA':'SG'
}
var BCEBProf = {
    'ML':'RAK',
    'SE':'DV',
    'CN':'ZAN',
    'DAA':'SG'
}
var BCEDProf = {
    'ML':'PBT',
    'SE':'MZ',
    'CN':'USB',
    'DAA':'DSJ'
}

A1 = ['CN','ML','DAA','SE']
A1Prof = ['AV','PBT','SG','DV']
A2 = ['ML','CN','SE','DAA']
A2Prof = ['PBT','TAJH','DV','DSJ']
A3 = ['ML','DAA','SE','CN']
A3Prof = ['TAMT','RKD','KRL','USB']
A4 = ['DAA','SE','ML','CN']
A4Prof = ['RKD','DV','SJ','VUP']

B1 = ['DAA','CN','ML','SE']
B1Prof = ['DSJ','AV','TAMT','MDB']
B2 = ['SE','ML','CN','DAA']
B2Prof = ['SSD','RAK','ZAN','DSJ']
B3 = ['SE','DAA','ML','CN']
B3Prof = ['SSD','DSJ','RAK','ZAN']
B4 = ['CN','SE','DAA','ML']
B4Prof = ['VUP','SSD','LG','RAK']


C1 = ['DAA','CN','SE','ML']
C1Prof = ['DSJ','USB','MZ','TAMT']
C2 = ['SE','ML','CN','DAA']
C2Prof = ['MZ','TAMT','TARG','CT']
C3 = ['ML','DAA','SE','CN']
C3Prof = ['RAK','CT','PRS','CT']
C4 = ['CN','SE','DAA','ML']
C4Prof = ['ZAN','MZ','SG','TAJS']

D1 = ['CN','ML','SE','DAA']
D1Prof = ['USB','PBT','SSD','SM']
D2 = ['ML','CN','DAA','SE']
D2Prof = ['SJ','TARG','DSJ','MZ']
D3 = ['DAA','SE','CN','ML']
D3Prof = ['CT','PRS','VU','SJ']
D4 = ['SE','DAA','ML','CN']
D4Prof = ['DV','AT','TAJS','TAJH']

AT1 = ['','','DAA']
AT1Prof = 'SG'
AT2 = ['','','DAA']
AT2Prof = 'RKD'
AT3 = ['DAA','','']
AT3Prof = 'DSJ'
AT4 = ['','DAA','']
AT4Prof = 'DSJ'

BT1 = ['','','DAA']
BT1Prof = 'TU'
BT2 = ['DAA','','']
BT2Prof = 'RKD'
BT3 = ['','DAA','']
BT3Prof = 'DSJ'
BT4 = ['','DAA','']
BT4Prof = 'RKD'

CT1 = ['DAA','','']
CT1Prof = 'SG'
CT2 = ['','DAA','']
CT2Prof = 'SG'
CT3 = ['','DAA','']
CT3Prof = 'JP'
CT4 = ['','','DAA']
CT4Prof = 'DSJ'

DT1 = ['DAA','','']
DT1Prof = 'DSJ'
DT2 = ['DAA','','']
DT2Prof = 'JP'
DT3 = ['','','DAA']
DT3Prof = 'DSJ'
DT4 = ['DAA','','']
DT4Prof = 'TU'

var PDTut = ['Prof. Harsh Kapadia','Prof. P.N.Kapil','Prof. Pronoy Bhattacharya','Prof. Anuja Nair']
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
    var SD1Prof ='';
    var SD2Prof = '';
    var SD3Prof = '';
    var SD4Prof = '';
    var SD1 = '';
    var SD2 = '';
    var SD3 = '';
    var SD4 = '';
    var STD1Prof = '';
    var STD2Prof = '';
    var STD3Prof = '';
    var STD4Prof = '';
    var STD1 = '';
    var STD2 = '';
    var STD3 = '';
    var STD4 = '';
    var DivProf = '';
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
    if(division=='A') {
        SD1Prof = A1Prof;
        SD2Prof = A2Prof;
        SD3Prof = A3Prof;
        SD4Prof = A4Prof;
        SD1 = A1;
        SD2 = A2;
        SD3 = A3;
        SD4 = A4;
        STD1Prof = AT1Prof;
        STD2Prof = AT2Prof;
        STD3Prof = AT3Prof;
        STD4Prof = AT4Prof;
        STD1 = AT1;
        STD2 = AT2;
        STD3 = AT3;
        STD4 = AT4;
        DivProf = BCEAProf;
    }
    if(division=='B') {
        SD1Prof = B1Prof;
        SD2Prof = B2Prof;
        SD3Prof = B3Prof;
        SD4Prof = B4Prof;
        SD1 = B1;
        SD2 = B2;
        SD3 = B3;
        SD4 = B4;
        STD1Prof = BT1Prof;
        STD2Prof = BT2Prof;
        STD3Prof = BT3Prof;
        STD4Prof = BT4Prof;
        STD1 = BT1;
        STD2 = BT2;
        STD3 = BT3;
        STD4 = BT4;
        DivProf = BCEBProf;
    }
    if(division=='C') {
        SD1Prof = C1Prof;
        SD2Prof = C2Prof;
        SD3Prof = C3Prof;
        SD4Prof = C4Prof;
        SD1 = C1;
        SD2 = C2;
        SD3 = C3;
        SD4 = C4;
        STD1Prof = CT1Prof;
        STD2Prof = CT2Prof;
        STD3Prof = CT3Prof;
        STD4Prof = CT4Prof;
        STD1 = CT1;
        STD2 = CT2;
        STD3 = CT3;
        STD4 = CT4;
        DivProf = BCECProf;
    }
    if(division=='D') {
        SD1Prof = D1Prof;
        SD2Prof = D2Prof;
        SD3Prof = D3Prof;
        SD4Prof = D4Prof;
        SD1 = D1;
        SD2 = D2;
        SD3 = D3;
        SD4 = D4;
        STD1Prof = DT1Prof;
        STD2Prof = DT2Prof;
        STD3Prof = DT3Prof;
        STD4Prof = DT4Prof;
        STD1 = DT1;
        STD2 = DT2;
        STD3 = DT3;
        STD4 = DT4;
        DivProf = BCEDProf;
    }

    r=1;
    while(row=table.rows[r++])
    {
      c=1;
      while(cell=row.cells[c++])
      {

        if(BCEC[i] == "LAB") {
            if(subdiv == 1){
                cell.innerHTML= SubjectCodes[SD1[labctr]] + "<br> <b>LAB</b> <br> <i>" + ProfKey[SD1Prof[labctr]] + "</i>" ;
                $(cell).css("background-color", "#f0f2eb");
                labctr++;
                i++;
            }
            if(subdiv == 2){
                cell.innerHTML=SubjectCodes[SD2[labctr]] + "<br> <b>LAB</b> <br> <i>"  + ProfKey[SD2Prof[labctr]] + "</i>" ;
                $(cell).css("background-color", "#f0f2eb");
                labctr++;
                i++;
            }
            if(subdiv == 3){
                cell.innerHTML=SubjectCodes[SD3[labctr]] + "<br> <b>LAB</b> <br> <i>"  + ProfKey[SD3Prof[labctr]] + "</i>";
                $(cell).css("background-color", "#f0f2eb");
                labctr++;
                i++;
            }
            if(subdiv == 4){
                cell.innerHTML=SubjectCodes[SD4[labctr]] + "<br> <b>LAB</b> <br> <i>"  + ProfKey[SD4Prof[labctr]] + "</i>";
                $(cell).css("background-color", "#f0f2eb");
                labctr++;
                i++;
            }

        }
        else if(BCEC[i] == "TUT") {
            if(tutdiv == 1){
                if(STD1[tutctr]!=''){
                    cell.innerHTML=SubjectCodes[STD1[tutctr]] + "<br> <b>TUTORIAL</b>" + "<br> <i>"  + ProfKey[STD1Prof] + "</i>";
                    $(cell).css("background-color", "#f0eae6");
                }
                tutctr++;
                i++;
            }
            if(tutdiv == 2){
                if(STD2[tutctr]!=''){
                    cell.innerHTML=SubjectCodes[STD2[tutctr]] + "<br> <b>TUTORIAL</b>" + "<br> <i>"  + ProfKey[STD2Prof] + "</i>";
                    $(cell).css("background-color", "#f0eae6");
                }
                tutctr++;
                i++;
            }
            if(tutdiv == 3){
                if(STD3[tutctr]!=''){
                    cell.innerHTML=SubjectCodes[STD3[tutctr]] + "<br> <b>TUTORIAL</b>" + "<br> <i>"  + ProfKey[STD3Prof] + "</i>";
                    $(cell).css("background-color", "#f0eae6");
                }
                tutctr++;
                i++;
            }
            if(tutdiv == 4){
                if(STD4[tutctr]!=''){
                    cell.innerHTML=SubjectCodes[STD4[tutctr]] + "<br> <b>TUTORIAL</b>" + "<br> <i>"  + ProfKey[STD4Prof] + "</i>";
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
                cell.innerHTML=SubjectCodes[BCEC[i]] + '<br> <i>' + ProfKey[DivProf[BCEC[i]]] + '<i>';
            }
            i = i+1; 
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

