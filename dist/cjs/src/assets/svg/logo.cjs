'use strict';

require('react');

var UNISWAP_LOGO = "data:image/svg+xml,%3Csvg%20width%3D%2214%22%20height%3D%2215%22%20viewBox%3D%220%200%2014%2015%22%20fill%3D%22black%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20style%3D%22mix-blend-mode%3Adarken%22%3E%3Cpath%20d%3D%22M4.15217%201.55141C3.96412%201.52242%203.95619%201.51902%204.04468%201.5055C4.21427%201.47958%204.61472%201.51491%204.89067%201.58012C5.53489%201.73232%206.12109%202.12221%206.74683%202.81466L6.91307%202.99862L7.15088%202.96062C8.15274%202.8006%209.17194%202.92778%2010.0244%203.31918C10.2589%203.42686%2010.6287%203.64121%2010.6749%203.69629C10.6896%203.71384%2010.7166%203.82684%2010.7349%203.94742C10.7982%204.36458%2010.7665%204.68434%2010.6382%204.92317C10.5683%205.05313%2010.5644%205.09432%2010.6114%205.20554C10.6489%205.2943%2010.7534%205.35999%2010.8569%205.35985C11.0687%205.35956%2011.2968%205.0192%2011.4024%204.54561L11.4444%204.3575L11.5275%204.45109C11.9835%204.96459%2012.3417%205.66488%2012.4032%206.16335L12.4192%206.29332L12.3426%206.17517C12.2107%205.97186%2012.0781%205.83346%2011.9084%205.72183C11.6024%205.52062%2011.2789%205.45215%2010.4222%205.40727C9.64839%205.36675%209.21045%205.30106%208.77621%205.16032C8.03738%204.9209%207.66493%204.60204%206.78729%203.4576C6.39748%202.94928%206.15654%202.66804%205.91687%202.44155C5.37228%201.92691%204.83716%201.65701%204.15217%201.55141Z%22%2F%3E%3Cpath%20d%3D%22M10.8494%202.68637C10.8689%202.34575%2010.9153%202.12108%2011.0088%201.9159C11.0458%201.83469%2011.0804%201.76822%2011.0858%201.76822C11.0911%201.76822%2011.075%201.82816%2011.05%201.90142C10.9821%202.10054%2010.9709%202.3729%2011.0177%202.68978C11.0771%203.09184%2011.1109%203.14985%2011.5385%203.58416C11.739%203.78788%2011.9723%204.0448%2012.0568%204.15511L12.2106%204.35568L12.0568%204.21234C11.8688%204.03705%2011.4364%203.6952%2011.3409%203.64633C11.2768%203.61356%2011.2673%203.61413%2011.2278%203.65321C11.1914%203.68922%2011.1837%203.74333%2011.1787%203.99915C11.1708%204.39786%2011.1161%204.65377%2010.9842%204.90965C10.9128%205.04805%2010.9015%205.01851%2010.9661%204.8623C11.0143%204.74566%2011.0192%204.69439%2011.0189%204.30842C11.0181%203.53291%2010.9255%203.34647%2010.3823%203.02709C10.2447%202.94618%2010.0179%202.8295%209.87839%202.76778C9.73887%202.70606%209.62805%202.6523%209.63208%202.64828C9.64746%202.63307%2010.1772%202.78675%2010.3905%202.86828C10.7077%202.98954%2010.76%203.00526%2010.7985%202.99063C10.8244%202.98082%2010.8369%202.90608%2010.8494%202.68637Z%22%2F%3E%3Cpath%20d%3D%22M4.51745%204.01304C4.13569%203.49066%203.89948%202.68973%203.95062%202.091L3.96643%201.90572L4.05333%201.92148C4.21652%201.95106%204.49789%202.05515%204.62964%202.13469C4.9912%202.35293%205.14773%202.64027%205.30697%203.37811C5.35362%203.59423%205.41482%203.8388%205.44298%203.9216C5.48831%204.05487%205.65962%204.36617%205.7989%204.56834C5.89922%204.71395%205.83258%204.78295%205.61082%204.76305C5.27215%204.73267%204.8134%204.41799%204.51745%204.01304Z%22%2F%3E%3Cpath%20d%3D%22M10.3863%207.90088C8.60224%207.18693%207.97389%206.56721%207.97389%205.52157C7.97389%205.36769%207.97922%205.24179%207.98571%205.24179C7.99221%205.24179%208.06124%205.29257%208.1391%205.35465C8.50088%205.64305%208.906%205.76623%2010.0275%205.92885C10.6875%206.02455%2011.0589%206.10185%2011.4015%206.21477C12.4904%206.57371%2013.1641%207.30212%2013.3248%208.29426C13.3715%208.58255%2013.3441%209.12317%2013.2684%209.4081C13.2087%209.63315%2013.0263%2010.0388%2012.9779%2010.0544C12.9645%2010.0587%2012.9514%2010.0076%2012.9479%209.93809C12.9296%209.56554%2012.7402%209.20285%2012.4221%208.93116C12.0604%208.62227%2011.5745%208.37633%2010.3863%207.90088Z%22%2F%3E%3Cpath%20d%3D%22M9.13385%208.19748C9.11149%208.06527%209.07272%207.89643%209.04769%207.82228L9.00217%207.68748L9.08672%207.7818C9.20374%207.91233%209.2962%208.07937%209.37457%208.30185C9.43438%208.47165%209.44111%208.52215%209.44066%208.79807C9.4402%209.06896%209.43273%209.12575%209.3775%209.27858C9.29042%209.51959%209.18233%209.69048%209.00097%209.87391C8.67507%2010.2036%208.25607%2010.3861%207.65143%2010.4618C7.54633%2010.4749%207.24%2010.4971%206.97069%2010.511C6.292%2010.5461%205.84531%2010.6186%205.44393%2010.7587C5.38623%2010.7788%205.3347%2010.7911%205.32947%2010.7859C5.31323%2010.7698%205.58651%2010.6079%205.81223%2010.4998C6.1305%2010.3474%206.44733%2010.2643%207.15719%2010.1468C7.50785%2010.0887%207.86998%2010.0183%207.96194%209.99029C8.83033%209.72566%209.27671%209.04276%209.13385%208.19748Z%22%2F%3E%3Cpath%20d%3D%22M9.95169%209.64109C9.71465%209.13463%209.66022%208.64564%209.79009%208.18961C9.80399%208.14088%209.82632%208.101%209.83976%208.101C9.85319%208.101%209.90913%208.13105%209.96404%208.16777C10.0733%208.24086%2010.2924%208.36395%2010.876%208.68023C11.6043%209.0749%2012.0196%209.3805%2012.302%209.72965C12.5493%2010.0354%2012.7023%2010.3837%2012.776%2010.8084C12.8177%2011.0489%2012.7932%2011.6277%2012.7311%2011.8699C12.5353%2012.6337%2012.0802%2013.2336%2011.4311%2013.5837C11.336%2013.635%2011.2506%2013.6771%2011.2414%2013.6773C11.2321%2013.6775%2011.2668%2013.5899%2011.3184%2013.4827C11.5367%2013.029%2011.5616%2012.5877%2011.3965%2012.0965C11.2954%2011.7957%2011.0893%2011.4287%2010.6732%2010.8084C10.1893%2010.0873%2010.0707%209.89539%209.95169%209.64109Z%22%2F%3E%3Cpath%20d%3D%22M3.25046%2012.3737C3.91252%2011.8181%204.73629%2011.4234%205.48666%2011.3022C5.81005%2011.25%206.34877%2011.2707%206.64823%2011.3469C7.12824%2011.469%207.55763%2011.7425%207.78094%2012.0683C7.99918%2012.3867%208.09281%2012.6642%208.19029%2013.2816C8.22875%2013.5252%208.27057%2013.7697%208.28323%2013.8251C8.35644%2014.1451%208.4989%2014.4008%208.67544%2014.5293C8.95583%2014.7333%209.43865%2014.7459%209.91362%2014.5618C9.99423%2014.5305%2010.0642%2014.5089%2010.0691%2014.5138C10.0864%2014.5308%209.84719%2014.6899%209.67847%2014.7737C9.45143%2014.8864%209.2709%2014.93%209.03102%2014.93C8.59601%2014.93%208.23486%2014.7101%207.9335%2014.2616C7.87419%2014.1733%207.7409%2013.909%207.63729%2013.6741C7.3191%2012.9528%207.16199%2012.7331%206.79255%2012.4926C6.47104%2012.2834%206.05641%2012.2459%205.74449%2012.3979C5.33475%2012.5976%205.22043%2013.118%205.51389%2013.4478C5.63053%2013.5789%205.84803%2013.6919%206.02588%2013.7139C6.35861%2013.7551%206.64455%2013.5035%206.64455%2013.1696C6.64455%2012.9528%206.56071%2012.8291%206.34966%2012.7344C6.0614%2012.6051%205.75156%2012.7562%205.75304%2013.0254C5.75368%2013.1402%205.80396%2013.2122%205.91971%2013.2643C5.99397%2013.2977%205.99569%2013.3003%205.93514%2013.2878C5.67066%2013.2333%205.6087%2012.9164%205.82135%2012.706C6.07667%2012.4535%206.60461%2012.5649%206.78591%2012.9097C6.86208%2013.0545%206.87092%2013.3429%206.80451%2013.517C6.6559%2013.9068%206.22256%2014.1117%205.78297%2014.0002C5.48368%2013.9242%205.36181%2013.842%205.00097%2013.4726C4.37395%2012.8306%204.13053%2012.7062%203.22657%2012.566L3.05335%2012.5391L3.25046%2012.3737Z%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0.308383%200.883984C2.40235%203.40996%203.84457%204.45213%204.00484%204.67231C4.13717%204.85412%204.08737%205.01757%203.86067%205.14567C3.7346%205.21689%203.47541%205.28905%203.34564%205.28905C3.19887%205.28905%203.14847%205.23278%203.14847%205.23278C3.06337%205.15255%203.01544%205.16658%202.5784%204.39555C1.97166%203.45981%201.46389%202.68357%201.45004%202.67057C1.41801%202.64052%201.41856%202.64153%202.51654%204.59413C2.69394%205.0011%202.55182%205.15049%202.55182%205.20845C2.55182%205.32636%202.51946%205.38834%202.37311%205.55059C2.12914%205.8211%202.02008%206.12505%201.94135%206.7541C1.8531%207.45926%201.60492%207.95737%200.917156%208.80989C0.514562%209.30893%200.448686%209.4004%200.3471%209.60153C0.219144%209.85482%200.183961%209.99669%200.169701%2010.3165C0.154629%2010.6547%200.183983%2010.8732%200.287934%2011.1965C0.378939%2011.4796%200.473932%2011.6665%200.716778%2012.0403C0.926351%2012.3629%201.04702%2012.6027%201.04702%2012.6965C1.04702%2012.7711%201.06136%2012.7712%201.38611%2012.6983C2.16328%2012.5239%202.79434%2012.2171%203.14925%2011.8411C3.36891%2011.6084%203.42048%2011.4799%203.42215%2011.1611C3.42325%2010.9525%203.41587%2010.9088%203.35914%2010.7888C3.2668%2010.5935%203.09869%2010.4311%202.72817%2010.1794C2.2427%209.84953%202.03534%209.58398%201.97807%209.21878C1.93108%208.91913%201.98559%208.70771%202.25416%208.14825C2.53214%207.56916%202.60103%207.32239%202.64763%206.73869C2.67773%206.36158%202.71941%206.21286%202.82842%206.09348C2.94212%205.969%203.04447%205.92684%203.32584%205.88863C3.78457%205.82635%204.07667%205.70839%204.31677%205.48849C4.52505%205.29772%204.61221%205.11391%204.62558%204.8372L4.63574%204.62747L4.51934%204.49259C4.09783%204.00411%200.0261003%200.5%200.000160437%200.5C-0.00538105%200.5%200.133325%200.672804%200.308383%200.883984ZM1.28364%2010.6992C1.37894%2010.5314%201.3283%2010.3158%201.16889%2010.2104C1.01827%2010.1109%200.78428%2010.1578%200.78428%2010.2875C0.78428%2010.3271%200.806303%2010.3559%200.855937%2010.3813C0.939514%2010.424%200.945581%2010.4721%200.879823%2010.5703C0.81323%2010.6698%200.818604%2010.7573%200.894991%2010.8167C1.0181%2010.9125%201.19237%2010.8598%201.28364%2010.6992Z%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M4.92523%205.99865C4.70988%206.06439%204.50054%206.29124%204.43574%206.5291C4.39621%206.67421%204.41864%206.92875%204.47785%207.00736C4.57351%207.13433%204.66602%207.16778%204.91651%207.16603C5.40693%207.16263%205.83327%206.95358%205.88284%206.69224C5.92347%206.47801%205.73622%206.18112%205.4783%206.05078C5.34521%205.98355%205.06217%205.95688%204.92523%205.99865ZM5.49853%206.44422C5.57416%206.33741%205.54107%206.22198%205.41245%206.14391C5.1675%205.99525%204.79708%206.11827%204.79708%206.34826C4.79708%206.46274%204.99025%206.58765%205.16731%206.58765C5.28516%206.58765%205.44644%206.5178%205.49853%206.44422Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E";

module.exports = UNISWAP_LOGO;
