import React from 'react';
import Modal from 'react-responsive-modal';
import RaidenBox from '../7-Raiden-Comments/RaidenBox';
import { Button } from 'reactstrap';
import RaidenStats from '../characters/RaidenStats';
import { ModalHeader } from 'reactstrap';
 
export default class Raiden extends React.Component {
  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    const { open } = this.state;
    return (
      <div>
        <Button className="welcomeBox" onClick={this.onOpenModal}>Enter</Button>
        <Modal open={open} onClose={this.onCloseModal} >
        <ModalHeader toggle={this.onCloseModal}></ModalHeader>
        <div>
        <img className="boxmodal" width="100%" src="https://ae01.alicdn.com/kf/HTB1CQJ4XjrguuRjy0Feq6xcbFXaz/raiden-metal-gear-rising-revengeance-game-poster-silk-fabric-cloth-print-wall-sticker-Wall-Decor-custom.jpg_640x640.jpg" alt="RaidenHero" />
        </div>
        <div className="main">
          <center>
          <p>
          <br/>
          "I am lightning, the rain transformed..."<br /> <br />
          </p>
          <h2>-Raiden</h2>
          </center>
          <RaidenStats />
          <p>
          <br /> 
          Raiden, real name Jack, also known as Jack the Ripper, White Devil, and Snake, was a Liberian-American mercenary and former special forces soldier. Previously a child soldier under Solidus Snake, Raiden was later selected by the Patriots to test the S3 Plan at the Big Shell, as a new recruit to the reformed FOXHOUND unit. He later worked alongside the Paradise Lost Army in their anti-Patriot activities, but was captured and forced to undergo heavy cybernetic experimentation. After successfully escaping, Raiden went on to assist Solid Snake during the Guns of the Patriots Incident.
          <br /> <br />
          Jack was born on a rainy day in Liberia. During his youth, in the turbulent period that was the First Liberian Civil War, Jack was adopted by Solidus Snake, who named him and became his godfather after he killed the former's parents. Jack was subsequently raised as a child soldier and later fought in the country's Civil War in 1989. He and other children were shown Hollywood action films daily for "image training," and were given food mixed with gunpowder containing toluene to make them more controllable.
          <br /> <br />
          Under Solidus, Jack became a killing machine, known alternately as the "White Devil" and "Jack the Ripper" due to his incredibly high kill rate compared to other boys his age, as well as a reference to his being one of the few Caucasians born in Liberia. Armed with a gun at the age of six, he would later remember it as an AK rifle, as well as a knife, he proved to be a superior soldier, rising to become captain of the Small Boy Unit at ten. His skills with a bladed weapon, as well as his cruelty in dispatching enemies with them, was another reason for his "Ripper" nickname. After the war ended, Solidus had Jack placed in a relief center.
          <br /> <br />
          </p>
          <center> 
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/92/23/e5/9223e53e180caf966116be24c8b6e30f--playstation-games-metal-gear-solid.jpg" alt="FireRaiden" />
          <br /><br />
          <h4>Biography</h4>
          </center>
          <hr />
          <p>
          Due to his participation in the Liberian Civil War, Raiden was one of the few Force XXI VR subjects to possess actual combat experience. Also, because of his past as a child soldier, as well as his possessing Post Traumatic Stress Disorder, as a result, he also occasionally pushed away even people he cared about due to his being "afraid of the night." Because of this, he was outwardly cold and distant even to people whom he personally knew, such as his then-girlfriend Rosemary. It was largely because of this cold nature, as well as his pushing people he knew away that resulted in Rosemary initially fearing that he was unfaithful to her. When he first infiltrated the Big Shell, Raiden appeared to be a young and "inexperienced" agent of a "reformed" FOXHOUND unit, occasionally prone to emotional outbursts.
          <br /> <br />
          Throughout his mission, however, being that the memories of his past began to slowly resurface, he also began to suspect that he enjoyed killing, and reluctantly informed Rosemary as much. When the memories of his time as a child soldier began to resurface, he gained somewhat of a low opinion of himself, especially in comparison to Solid Snake's accomplishments. He also held some hero worship for Solid Snake, as part of the reason for his agreeing to partake in the Big Shell Incident to take down the terrorist leader was so he'd meet the legend face-to-face, and was initially disappointed when it seemed Snake had truly died in the Tanker Incident.
          <br /> <br />
          Although he immensely respected Solid Snake, there were instances where it had its rough spots during the Big Shell Incident, such as when he learned that Snake and Otacon lied to him about whether they knew about the Big Shell being a great big conspiracy, as well as a remark Snake made that got him angered enough to make explosive insults about Snake, not realizing that he was in earshot, and when Snake "betrayed" Raiden at Arsenal Gear to lessen security onboard without warning him beforehand. Prior to finding out that Pliskin was in fact Snake, he also held some respect for Pliskin in terms of mentorship and camaraderie. Nonetheless, he did end up suspicious when Rosemary seemed to be praiseworthy of Pliskin.
          <br /> <br />
          </p>
          <center>
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/9a/ef/96/9aef96a3db90140eec0293cba6a35b9c--metal-gear-solid-red-eyes.jpg" alt="CyborgRaiden"/>
          </center>
          <br /> <br />
          <p>
          Raiden eventually learned of the Patriots' existence, as well as the development of Arsenal Gear, an enormous warship for which the Big Shell acted as a disguise. He also rescued Arsenal's AI engineer Emma Emmerich and attempted to escort her to safety, although she was later killed by Vamp despite his best efforts. Throughout the mission, Raiden also harbored some suspicions that he may enjoy killing people, although he did not know why. Raiden and Snake were able to join forces to take down Dead Cell and upload a virus into GW, Arsenal's AI. He was then seemingly betrayed by Snake and was subsequently captured by Olga Gurlukovich. Taken aboard Arsenal, Raiden was later freed by Olga, telling him that they had needed to use him so that Snake could sneak on board. He also learned of Olga's motivation for aiding him: The Patriots forced her to participate by holding her child hostage, after her kid was kidnapped shortly after delivering her. However, he also had to endure some physical abuse by Olga to ensure her cover was remained intact. Rosemary then called him, to which he eventually admitted to her his past as one of Liberia's child soldiers, also revealing this was why he was very distant towards her. He also speculated that Solidus' role in his life may have been the reason why the Patriots selected him for the S3 Plan.
          <br /> <br />
          As Raiden snuck through Arsenal Gear's interior, the Colonel began to act strangely during Codec transmissions. Pressing on, Raiden made his way to rendezvous with Snake, and was eventually contacted by Rose. She admitted to him that she was actually a Patriot spy sent to keep tabs on him, though she insisted that she had genuinely fallen in love with him. This greatly angered Raiden, but her transmission was cut off, just as she revealed that she was pregnant with his child. Raiden then met with Snake, who gave him most of his equipment back, along with Olga's high-frequency blade. Suspicious about his C.O.'s odd behavior, Raiden had Snake's partner Otacon investigate, who eventually learned that the Colonel was actually an AI construct of GW, partially based on the manipulation of Raiden's memories. After the Colonel claimed that Rose was being held hostage, Raiden began to fear that Rose didn't exist either, and that all his memories of her might have been falsified. After some reassurance from Snake, the pair battled through the Arsenal Tengu commandos before encountering Dead Cell's leader Fortune. Snake told Raiden to go on ahead, with Fortune claiming that Snake was the root of all her misery. Raiden, hesitant at first, left Snake to face her alone.
          <br /> <br />
          Raiden went on to battle several mass-produced Metal Gear RAY units. He managed to defeat most of them before collapsing from exhaustion. Just as Raiden was about to be killed, Olga came to his aid. By doing this, she revealed herself as an enemy of Solidus Snake, who angrily killed Olga. Olga's final words were for Raiden to live. As Solidus ordered the remaining RAYs to kill Raiden, the virus uploaded into GW went into effect, disabling the RAYs. Solidus then destroyed them out of frustration.
          <br /> <br />
          After Arsenal crashed into Manhattan, it was revealed that Raiden was merely a puppet of the Patriots, and that his entire mission on the Big Shell had been carefully scripted. AI representations of the Colonel and Rose told Raiden that he was just a weapon, a creation of the Patriots with no purpose but for what they made him. The AI instructed Raiden to kill Solidus, which he had no choice but to do so, for his own sake and for the sake of Olga's daughter and Rose/their unborn child. Raiden, however, also expressed disgust towards the Patriots' actions, and made it clear beforehand that he will not follow their commands anymore. Solidus also desired to kill him so he could access the backup data of the Patriots that was stored in his cerebral cortex in order to track them down, to compensate for the apparent destruction of GW. A fierce battle on top of Federal Hall ensued, and ended with Raiden emerging victorious over Solidus. He was reunited with Snake, who assured him that he was not the puppet of anyone, and that he could shape his own destiny. Raiden offered his services to Philanthropy, but Snake told him to take care of his personal affairs first. Raiden then met with Rose, and he solemnly forgave her, with the two ultimately deciding to continue their lives together.
          <br /> <br />
          </p>
          <center>
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/ba/c9/18/bac91850c90fefc39d8e40a4c7e1aa1b--videogame-art-metal-gear-solid.jpg" alt="RaidenArt" />
          </center>
          <br /> <br />
          <p>
          In 2014, Raiden reappeared in South America, revealing himself to Solid Snake by Codec to warn him of an enemy PMC ambush. Disavowing his identity as Jack, Raiden updated Snake as to his dealings with the Paradise Lost Army, before the call was interrupted due to a firefight. Shortly after Snake defeated the PMC commander Laughing Octopus, Raiden contacted him again to provide help in tracking down Naomi Hunter, using his knowledge of scouting. Raiden later assisted in Snake and Naomi's escape by helicopter, by fighting off several Gekko units at a local marketplace. Removing the black duster that concealed his cyborg appearance, Raiden was able to disable the attacking Gekko using his enhanced agility and swordsmanship, employing a high-frequency blade.
          <br /> <br />
          Gekko reinforcements were eventually able to restrain Raiden on behalf of their commander, Vamp. Vamp proceeded to stab his old foe twice with his combat knife, tasting Raiden's artificial white blood from the blade. When Vamp commented on his apparent "immortality," Raiden replied that he simply didn't fear death, before being freed from the Gekko's tethers by Solid Snake's gunfire. Upon becoming free, Raiden fought off the remaining Gekko and engaged Vamp in an intense knife fight, the contact between their weapons becoming so fierce at one point as to cause his sword to glow red hot. Their battle eventually resulted in Vamp standing at Raiden's back and locking him in his grip. Raiden's decisive attack would prove his earlier statement that he did not fear death, running his sword through his own abdomen, but impaling Vamp as well. With each of them having inflicted serious injuries to the other, their battle ended when Vamp succumbed to his wounds and collapsed to the ground. Raiden then jumped up towards the helicopter hovering overhead, which Snake and Naomi had earlier boarded, and after being helped inside, was transported away from the area by its pilot, Otacon. Shortly thereafter, Raiden himself collapsed from the injuries afflicted by Vamp, urging Snake to find Big Mama in Eastern Europe.
          <br /> <br />
          Taken aboard the aircraft Nomad, Raiden continued to suffer and his chances of survival became bleak. Naomi recognized that he required a white blood transfusion and dialysis, which they procured for him while in Europe, with help from his former acquaintance, Dr. Madnar. After recovering somewhat, Raiden later attempted to join Snake on his mission to Shadow Moses Island, wishing to defeat Liquid Ocelot and break free of the Patriots' hold on his life, the events of his past ultimately causing him to break down emotionally. Snake consoled Raiden but refused his request due to his incomplete blood dialysis, and urging the younger soldier not to follow the same path that his own life had taken.
          <br /> <br />
          After making sufficient progress in his recovery, Raiden eventually headed to Shadow Moses, saving Snake's life from attacking Suicide Gekko. Raiden then dueled Vamp once more atop the original Metal Gear REX, after Snake had returned the latter to a vulnerable state via nanomachine suppressors. While Snake warded off more approaching Gekko, Raiden engaged in another blade fight with Vamp and ultimately emerged the victor, defeating his enemy once and for all. After the immediate threat had passed, due to the actions of Otacon's Metal Gear Mk. II, Raiden relayed a coded message from Sunny to Naomi, regarding the completion of the FOXALIVE computer virus. Naomi then used nanomachine suppressors to both euthanize Vamp and commit suicide, much to the group's shock.
          <br /> <br />
          </p>
          <center>
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/61/fb/07/61fb071178331de93e893f7b953d40f4--gaming.jpg" alt="Mgs4Raiden" />
          </center>
          <br /> <br />
          <p>
          When the Gekko commenced another assault, Snake and Raiden departed the area via a supply tunnel, within the recently reactivated REX. To slow down their pursuers, Raiden fell behind to hold them off, later being caught under debris caused by the Suicide Gekko's detonation, while Snake escaped to the port area. After Snake was forced from REX, following a grueling battle with Liquid Ocelot's RAY, Raiden set himself free from under the debris by cutting off his right arm, and headed to assist his ally. With an exhausted Snake about to be crushed by Liquid's Outer Haven, Raiden placed himself in the warship's path of destruction through the small pier, holding back its immense bulk with his enhanced strength, and giving Snake time to clear the area. Raiden was himself caught beneath the vessel, however, screaming Rose's name as his strength gave way, and recalling memories of their time together, before he lost consciousness. Following Outer Haven's departure, Raiden's body was later recovered, his survival testament to his extreme resilience, though according to Otacon, he was in no condition to help them further.
          <br /> <br />
          Even after his recent physical ordeal, Raiden later boarded Outer Haven during Snake's infiltration of the ship, missing both arms and wielding his sword between his teeth. Preventing a group of Haven Troopers from reaching an immobilized Snake, Raiden demonstrated lightning-like powers, with which he struck down several of the would-be attackers. Raiden then intended to upload the FOXALIVE virus into Outer Haven's on-board AI in Snake's place, since his cyborg body was immune to the microwave defenses ahead of them, but an emboldened Snake convinced him otherwise. Instead, he decided to hold the Haven Troopers off and buy Snake enough time to reach the AI and upload the virus. Though Raiden was able to kill several of his assailants, he was eventually overwhelmed and forced to the ground. Backed to a wall and at the enemy's mercy, Raiden was saved at the last moment by the successful virus upload, the AI's destruction disabling his opponents' internal nanomachines and incapacitating them.
          <br /> <br />
          Afterwards, Raiden was sent to a hospital where he was fitted with a new cybernetic body that featured artificial skin, giving him a somewhat more human appearance. A month later, following Raiden's surgery, Rose and her son John paid him a visit, though Raiden ignored them both, believing that the child was Campbell's, who Rose had married during Raiden's estrangement from her. Rose told Raiden that the child was in fact his, and her miscarriage had been a lie. Her marriage to Campbell had actually been a ploy to protect herself and their son from the Patriots, so that he could not be used as leverage against Raiden. In other words, Raiden's lack of awareness of his son and his disdain for Rose meant that both would serve no purpose to the Patriots, as their suffering would not move him in any way. Stunned, Raiden forgave Rose once again, as she felt desperately guilty from being unable to tell him due to the danger doing so presented. She proceeded to introduce their son to Raiden, and the three huddled together in reunion. To him, at that moment, it felt like a scene from Beauty and the Beast. However, Rose assured him that he was no beast, but her husband. Raiden then vowed that he was done running, while Rose vowed that she was no longer afraid.
          </p>
          <center>
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/25/3d/28/253d281d541eded0a993b6dd559f253b.jpg" alt="mgs3Bridge" />
          </center>
          </div>
        <RaidenBox />
        </Modal>
      </div>
    );
  }
}