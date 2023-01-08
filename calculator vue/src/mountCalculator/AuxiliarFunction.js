export default function ComprovedSign(keyButton){
    return (keyButton=="+"||keyButton=="-"||keyButton=="*"||keyButton=="/"||keyButton=="CE"||keyButton=="="||keyButton=="$"||keyButton=="L"||keyButton=="¥")? true: false;
}