import React from "react";

import { motion } from "framer-motion"

export default function Fortune() {
  const _ = require("lodash");

  const array1 = [
    "💖 ความรัก  : สำหรับคนโสดคุณจะมีเสน่ห์ขึ้นมาก จะมีคนเข้าหาอยากพัฒนาความสัมพันธ์กับคุณแต่คุณก็จะยังอยากเลือกอยู่โดยที่ยังไม่ตัดสินใจกับใคร ส่วนคนที่มีคู่แล้ว คนรักจะทำตัวโรแมนติกหรืออยากพัฒนาความสัมพันธ์กับเรามากขึ้น ",
    "💖 ความรัก  : สำหรับคนโสด คุณมีเกณฑ์ได้เจอกับคนที่อาจมีคนคุย หรือมีใครในใจอยู่แล้วเข้ามา ทำให้ความสัมพันธ์อยู่ในลักษณะครึ่งๆ กลางๆ ไปก่อน ส่วนคนที่มีคู่แล้ว ต้องระวังปัญหาเดิมๆ กลับมา ต้องใจเย็นให้มากขึ้น เพื่อเป็นการประคองความสัมพันธ์ ",
    "💖 ความรัก  : สำหรับคนโสด อาจมีคนเข้ามาจากทางออนไลน์ หรือทางไกลได้ในเดือนนี้ แต่ความสัมพันธ์จะเป็นแบบค่อยๆ เป็น ค่อยๆ ไป ส่วนคนที่มีคู่แล้ว อาจได้พากันไปเปลี่ยนบรรยากาศ เดินทางไกลด้วยกันได้ ",
    "💖 ความรัก  : สำหรับคนโสด หากคุณมีคนคุยอยู่แล้ว อาจมีความอึดอัด หรือความต้องการบางอย่างเริ่มไม่ตรงกัน แต่ก็ไม่มีฝ่ายใดที่พูดออกไป ส่วนคนที่มีคู่แล้ว ต้องระวังการมีปัญหาแล้วไม่เคลียร์กันให้ดี ทำให้ความสัมพันธ์ อึดอัดไปเรื่อยๆ ",
    "💖 ความรัก  : สำหรับคนโสด คุณจะมีคนเข้ามาสนใจอย่างรวดเร็ว แล้วก็ออกไปแบบไม่ทันตั้งตัวด้วยเช่นกัน ส่วนคนที่มีคู่แล้ว อาจต้องระวังเรื่องของการเงิน มาทำให้มีปัญหา ปากเสียงกันได้ หรืออาจมีการใช้เงินร่วมกันที่รวดเร็วด้วย ",
    "💖 ความรัก  : สำหรับคนโสด จะมีคนไกล หรืออาจเป็นคนที่ไม่ค่อยได้เจอกันสักเท่าไหร่กลับมาคุยกันได้ แต่ความสัมพันธ์จะเป็นไปในแบบลุ่มๆ ดอนๆ ส่วนคนที่มีคู่แล้ว คนรักของคุณอาจไม่ค่อยว่างมาเจอ หรือเขาอาจต้องเดินทางไกลในเดือนนี้ได้ ",
    "💖 ความรัก  : คนที่ไม่มีใคร ใครคนนั้นมาให้เห็นแน่ แต่อาจจะต้องมีการแข่งขันนิดหน่อย ส่วนที่กำลังจะแย่คนใกล้กำลังจะไกลก็จะกลับมาใกล้กันเหมือนเดิม เอาเป็นว่าเดือนนี้บรรยากาศสดใส  ",
    "💖 ความรัก  : ใครจะมาอดทนกับคุณเท่าคนที่อยู่กับคุณ ยังไงก็เอาใจเขามาใส่ใจเราบ้าง ส่วนใครที่ไม่มีใครอยู่ข้างก็ต้องทำใจช่วงนี้คุณเอาใจอยากมาก และคงไม่มีใครมาทนกับคุณอดทนรอไปก่อน  ",
    "💖 ความรัก  : สำหรับคนโสด คุณจะได้เจอคนที่อายุมากกว่า ดูท่าทางจริงจังเข้ามา และความสัมพันธ์ครั้งนี้อาจไปได้ดี ฉะนั้นคุณอาจต้องพยายามเรียนรู้กันหน่อย ส่วนคนที่มีคู่แล้ว คุณกับคนรักอาจมีการวางแผนกันเดินทาง หรือมีการย้ายสถานที่พักผ่อนกันสักพักได้  ",
    "💖 ความรัก  : เนื้อคู่ของคุณคนนี้นิสัยดี ฐานะดี เป็นคนจริงจัง ชอบคบค้าสมาคมกับคนอื่น ชอบเข้าสังคม มีความมานะ อดทน เป็นคนที่ต้องการให้คนอื่นมาเอาใจ และต้องการให้มีคนมารายล้อมเขามากๆ ชอบท่องเที่ยวไปทุกหนทุกแห่ง บางครั้งก็เป็นคนที่โรแมนติกทีเดียว แต่ต้องระวังให้ดีล่ะ เพราะเค้าคนนี้เจ้าชู้มากเลย",
    "💖 ความรัก  : คู่ของคุณคนนี้ผิวขาว นิสัยเยือกเย็นเจ้าระเบียบ สำหรับความรักของเขาเป็นคนเจ้าอุดมคติ ชอบที่จะให้คุณอยู่ในระเบียบ คุณจะต้องทำตามเขาถ้าขัดใจเมื่อไหร่ เขาจะไม่พอใจคุณทันที แต่จะเป็นคนที่รักใครแล้วรักจริง ถ้าเค้ารักคุณแล้ว ก็พร้อมเสมอที่จะแต่งงานกับคุณ",
    "💖 ความรัก  : หากคุณมีการเที่ยวกับคนเริ่มคบหาครั้งแรก เกณฑ์ความหวานของคุณจะมีแต่คนอิจฉาในความรักที่เป็น โดยที่คุณก็รู้สึกปลื้มใจ",
    "💖 ความรัก  : คนที่แอบหลงรักคุณมานาน กลับเข้ามาพูดคุยกับคุณอีกครั้งหนึ่งโดยที่คุณอาจไม่รู้ตัวว่าเธอคนนี้ชอบคุณไม่น้อยเลยทีเดียว",
    "💖 ความรัก  : หากคุณยังโสดและกำลังเล็งใครสักคน ลองเข้าหาผู้ใหญ่อีกฝ่าย จะทำให้คุณเข้าหาได้ง่ายขึ้นและซื้อใจได้ไม่น้อยเลยทีเดีย",
    "💖 ความรัก  : บเจอคนใหม่ๆ ช่วงนี้ จะเจอแต่คนประเภทโสดแฟนเผลอ ลองคบดูสักพัก หากเธอเป็นคนที่ดีจริงและรักคุณก็สามารถรอได้อย่างไม่ปริปาก",
    "💖 ความรัก  : โอกาสที่จะเจอรักกับคนที่มีอายุมากกว่ามีสูง และคุณจะหลงใหลได้ปลื้มเขา เพราะเขาเป็นผู้ใหญ่ความคิดที่ดีมากกว่าคนที่ผ่านมา",


  ];

  const shuffled_array1 = _.shuffle(array1);
  const num1 = Math.floor(Math.random(array1) * array1.length);

  const array2 = [
    "👜 การงาน : คุณต้องเจองานที่ประเดประดังเข้ามามาก ไม่ว่าใครมีปัญหา หรือภาระอะไรก็จะมาตกลงที่คุณ โดยที่คุณเองก็สามารถแก้ปัญาทุกอย่างออกมาได้ดีด้วยเช่นกัน หากมีกิจการส่วนตัว จะขายหรือทำยอดได้ดีมากกว่าที่ผ่านมา ",
    "👜 การงาน : คุณอาจต้องไปร่วมมือในการทำงานกับทีมใหม่ๆ หรืออาจมีงานที่คุณต้องทำร่วมกับคนอื่นมากขึ้น ทำให้งานต้องถูกแบ่งเป็นหลายอย่างมาก ต้องระวังงานส่งไม่ทันตามเวลาที่กำหนด หรืองานของคุณ อาจต้องแก้ไขปัญหาเฉพาะหน้าอยู่เรื่อยๆ ด้วย ",
    "👜 การงาน : คุณอาจได้รับคำสั่งใหม่ๆ แบบไม่ทันตั้งตัวจากหัวหน้า หรือผู้ใหญ่เข้ามา ทำให้คุณต้องปรับเปลี่ยนระบบในการทำงานใหม่ หรืออาจมีคนใหม่ๆ เข้ามาช่วยงานคุณ แต่คุณอาจต้องโฟกัสการสอนงานให้เขามากหน่อย ",
    "👜 การงาน : คุณต้องระวังเรื่องการสื่อสารให้มาก เพราะอาจมีการเข้าใจอะไรบางอย่างผิดกันในเรื่องงาน ทำให้เป็นปัญหาเรื้อรัง หรือต้องมานั่งแก้ไขปัญหากันยกใหญ่ นอกจากนี้ ต้องระวังการถูกยกเลิกงานบางอย่างที่หวังเอาไว้อีกด้วย ",
    "👜 การงาน : งานของคุณอาจมีความล่าช้ากว่าที่กำหนดเอาไว้ แต่คุณจะยังคงสามารถควบคุมสถานการณ์ต่างๆ ได้ดีด้วยเช่นกัน นอกจากนี้ อาจมีคนเข้ามาจ้างงาน หรือไว้วางใจให้ทำงานบางอย่างที่สำคัญเพิ่มขึ้นอีกด้วย  ",
    "👜 การงาน : คุณมีเกณฑ์ที่จะได้รับโปรเจกต์ใหม่เข้ามา ซึ่งเป็นอะไรที่อาจทำให้เหนื่อยขึ้น แต่จะทำให้คุณก้าวหน้ามากขึ้นด้วยเช่นกัน ส่วนคนที่ยังว่างงาน และกำลังหางานอยู่ ในช่วงนี้ มีเกณฑ์ที่จะได้งาน หรือถูกเรียกสัมภาษณ์ได้  ",
    "👜 การงาน : คุณอาจมีการเปลี่ยนแปลงในเรื่องของงาน เช่น การต้องเปลี่ยนจากงานเดิมไปเจองานใหม่ หรือมีการเปลี่ยนแปลงสถานที่ในการทำงานด้วยได้เช่นกัน หากใครที่กำลังหางานอยู่ อาจต้องหางานที่ไกลบ้านหน่อย แล้วจะมีเกณฑ์ได้งานที่ดี ",
    "👜 การงาน : คุณต้องเคลียร์งานที่ไหลเข้ามาทับที่คุณให้หมด ซึ่งเป็นอะไรที่คุณไม่สามารถถ่ายเทไปที่คนอื่นได้สักเท่าไหร่ หรือถ้าเทไป ก็จะโดนเอากลับมาแก้ใหม่อีกที หรือในช่วงนี้ คุณอาจต้องไปสอนงานใคร ทำให้งานของคุณไม่ค่อยเดินหน้าเท่าไหร่ ",
    "👜 การงาน : คุณอาจต้องติดต่องานกับต่างประเทศ หรือเป็นงานทางออนไลน์มากขึ้น ซึ่งจะเป็นช่วงที่คุณสามารถกอบโกยเงิน หรือเปิดยอดได้มากขึ้นด้วยเช่นกัน แต่ต้องระวังว่าผู้ใหญ่ หรือหัวหน้า จะเอาแต่ใจมากขึ้น ทำให้คุณรู้สึกกดดันเรื่องงานมากขึ้น  ",
    "👜 การงาน : จะได้รับข่าวดีมากๆจากผู้ใหญ่ๆหรือเจ้านาย แต่ส่วนมากจะเป็นแนวธุรกิจส่วนตัวนะ ที่จะดีถึงดีมาก จะได้ขยายหรือปรับเปลี่ยนที่ดีขึ้น และมีคนมาอุปถัมภ์ก็เป็นพวกผู้ใหญ่นั้นแหละ  ",
    "👜 การงาน : ต้องเจอการเปลี่ยนแปลงของบรรยากาศรอบตัวคุณ แต่คุณยังอยู่เหมือนเดิม ที่แย่กว่านั้นคือคนที่ค่อยสนับสนุนคุณนั้นอาจจะเปลี่ยนไป   ",
    "👜 การงาน : มีคนตามงานคุณค่อนข้างมาก งานที่กองเป็นภูเขากำลังถล่มลงมา โดยที่คุณอาจจะแก้ไขปัญหาไปได้ทีละไม่มาก หากคุณมีธุรกิจส่วนตัว คุณมีเอกสารหรือต้องมาทำงานอะไรบางอย่างย้อนหลัง ในปริมาณมากด้วยเช่นกัน  ",
    "👜 การงาน : งานของคุณอาจถูกปฏิเสธ หรือถูกยกเลิก อะไรที่คุยกันเอาไว้อาจไม่ได้เป็นไปตามตกลง นอกจากนี้ ต้องระวังหัวหน้า หรือผู้ใหญ่จับตามอง เกิดความไม่พอใจการทำงานบางอย่างของคุณขึ้นมาได้ เพราะคุณต้องไปโฟกัสงานส่วนอื่นๆ มากขึ้น",
    "👜 การงาน : คุณอาจต้องติดต่องานกับต่างประเทศ หรือเป็นงานทางออนไลน์มากขึ้น ซึ่งจะเป็นช่วงที่คุณสามารถกอบโกยเงิน หรือเปิดยอดได้มากขึ้นด้วยเช่นกัน แต่ต้องระวังว่าผู้ใหญ่ หรือหัวหน้า จะเอาแต่ใจมากขึ้น ทำให้คุณรู้สึกกดดันเรื่องงานมากขึ้น  ",
  ];

  const shuffled_array2 = _.shuffle(array2);
  const num2 = Math.floor(Math.random(array2) * array2.length);

  const array3 = [
    "💰 การเงิน : ค่าใช้จ่ายของคุณยังคงเยอะอยู่ อาจมีค่าใช้จ่ายเกี่ยวกับบุตร บริวารเข้ามามากขึ้น และอาจมีรายจ่ายแอบแฝงเยอะ ต้องระวังการหมุนเงินไม่ค่อยทันในช่วงปลายเดือนอีกด้วย และต้องพยายามกันเงินสำรองเอาไว้มากหน่อย ",
    "💰 การเงิน : คุณจะมีค่าใช้จ่ายเกี่ยวกับบ้าน หรือคนในครอบครัวเข้ามา อาจเป็นค่าใช้จ่ายก้อนใหญ่กว่าที่คุณคิดไว้อยู่สักหน่อย แต่ตัวคุณเอง ก็จะมีรายรับเข้ามามากขึ้นกว่าเดิมด้วยเช่นกัน หรืออาจมีนายทุนอยากลงทุนกับคุณได้ ",
    "💰 การเงิน : คุณเตรียมใจไว้แล้วว่าจะใช้เงินมากกว่าที่ผ่านมา โดยที่คุณอาจใช้เงินไปกับการเดินทาง หรือไม่ได้วางแผนเรื่อง💰 การเงินสักเท่าไหร่ แต่ต้องระวังว่าเงินจะไหลออกเร็วมาก จนหมุนเงินไม่ทันได้ด้วยเช่นกัน ",
    "💰 การเงิน : ค่าใช้จ่ายของคุณจะมากกว่ารายรับประมาณหนึ่ง เนื่องจากอะไรหลายๆ อย่างไม่ได้เป็นไปอย่างที่วางแผน ต้องระวังการถูกจ่ายเงินช้าจากงวดที่ผ่านมา ทำให้คุณอาจต้องนำเงินเก็บออกมาใช้ไปก่อน  ",
    "💰 การเงิน : คุณอาจต้องจ่ายเงินให้คนรัก หรืออาจต้องไปทำอะไรด้วยกัน ซึ่งต้องใช้เงินในการดำเนินการได้ แต่ในส่วนของรายรับนั้น ก็จะยังมีเข้ามาตามที่คุณคาดหวังเอาไว้ แต่ต้องวางแผนเรื่องค่าใช้จ่ายให้ดีกว่าเดิ ",
    "💰 การเงิน : คุณจะหาเงินได้มากขึ้น หรือจะมีคนมาคืนเงิน จ่ายเงินย้อนหลังให้ ซึ่งอาจเป็นเงินที่คุณรอมาสักพักแล้ว และคุณเริ่มคิดถึงเรื่องของการลงทุน หรือการเอาเงินไปทำอะไรให้มันงอกเงย แต่อาจต้องรอจังหวะให้ดีก่อน  ",
    "💰 การเงิน : คุณอาจได้เงินเข้ามาช้ากว่าที่กำหมด หรืออยู่ๆ ระบบการจ่ายเงินอาจมีปัญหาขึ้นมาได้ ส่วนตัวคุณเองก็จะมีค่าใช้จ่ายเกี่ยวกับบ้าน หรือการย้ายที่อยู่ การเดินทางได้ด้วยเช่นกัน ",
    "💰 การเงิน : คุณจะมีค่าใช้จ่ายค่อนข้างเยอะ มีของที่อยากได้ หรืออะไรก็จำเป็นต้องซื้อเต็มไปหมด นอกจากนี้ อาจต้องไปจ่ายเงินให้กับคนในครอบครัว ทำให้คุณอาจไม่ค่อยเหลือเงินเก็บสักเท่าไหร่ ",
    "💰 การเงิน : คุณจะมีค่าใช้จ่ายเกี่ยวกับการเดินทางไกล หรือมีการโยกย้ายสถานที่บางอย่างเกิดขึ้น แต่จะเป็นช่วงที่คุณแฮปปี้กับการใช้เงินมากๆ ส่วนรายรับของคุณยังมีเข้ามาอยู่ แต่ก็จะมีค่าใช้จ่ายที่ไม่ได้ตั้งตัวเข้ามาด้วยเช่นกัน  ",
    "💰 การเงิน : คุณจะมีภาระเรื่องของ💰 การเงินขึ้นมาก อยู่ๆ ก็จะมีค่าใช้จ่ายเข้ามาให้คุณรับผิดชอบ รวมไปถึงอาจมีหนี้สินที่อาจต้องปลดก้อนใหญ่และอาจมีโชคลาภเล็กๆ น้อยๆ เข้ามาได้ด้วยเช่นกัน  ",
    "💰 การเงิน : ถือว่าจะมีการไหลของเงินดีมาก เข้าแล้วไม่ค่อยออก มีเหลือเก็บแน่นอน แล้วถ้าอยากซื้อของชิ้นใหญ่ก็จัดการได้เลย   ",
    "💰 การเงิน : ทิศทาง💰 การเงินจะไปใช้จ่ายในส่วนของการลงทุน และ การใช้จ่ายกับการลงทุนเป็นส่วนมาก ในส่วนอื่นๆ จะเป็นการใช้จ่ายที่จำเป็นกับเรื่องของคนในครอบครัว และ เกี่ยวกับ บ้าน/รถ   ",
    "💰 การเงิน : มีความคล่องตัว แม้ส่วนใหญ่จะมาจากน้ำพักน้ำแรง แต่ผลพลอยได้จากความขยันขันแข็งก็มีมิใช่น้อย มีลาภปาก ได้ของกินของฝากที่ถูกใจ ได้โชคจากการจับฉลากชิงรางวัล แต่อย่าให้ต้องหมดเปลืองไปกับเรื่องไม่เป็นเรื่องซะล่ะ",
  ];
  const shuffled_array3 = _.shuffle(array3);
  const num3 = Math.floor(Math.random(array3) * array3.length);

  return (
    <motion.div initial={{opacity :0}} animate ={{opacity : 1 ,transition: {duration:1.2,delay : 0.3}}} className="">

      <motion.div 
      initial={{ scale: 0 }}
      animate={{  scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      className="text-base text-black font-normal border border-2 border-black rounded-lg mb-4 p-2  z-40">
        {shuffled_array1[num1]}
      </motion.div>
      <motion.div
       initial={{ scale: 0 }}
       animate={{  scale: 1 }}
       whileHover={{ scale: 1.1 }}
       transition={{
         type: "spring",
         stiffness: 260,
         damping: 20
       }}className="text-base text-black font-normal border border-2 border-black rounded-lg mb-4 p-2  z-40">
        {shuffled_array2[num2]}
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{  scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}className="text-base text-black font-normal border border-2 border-black rounded-lg mb-4 p-2   z-40">
        {shuffled_array3[num3]}
      </motion.div>

        </motion.div>
  );
}
