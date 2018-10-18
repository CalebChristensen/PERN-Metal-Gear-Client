import React from 'react';
import Modal from 'react-responsive-modal';
import QuietBox from '../9-Quiet-Comments/QuietBox'
import { Button } from 'reactstrap';
import QuietStats from '../characters/QuietStats';
import { ModalHeader } from 'reactstrap';
 
export default class Quiet extends React.Component {
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
        <img className="boxmodal" width="100%" src="https://pre00.deviantart.net/6673/th/pre/i/2018/042/c/f/quiet_wallpaper_by_tylercairnsart-dc2wfbi.jpg" alt="QuietHero" />
        </div>
        <div className="main">
          <center>
          <p>
          <br/>
          "I did not choose to be Quiet. I wanted to express my feelings to you.<br /> If only we shared a common tongue. Vengeance is what drove me to them...<br /> The only language left to me, revenge."<br /> <br />
          </p>
          <h2>-Quiet</h2>
          </center>
          <QuietStats />
          <p>
          <br /> 
          Quiet, known to the Soviet forces as Tixij, was a female assassin during the 1980s. Originally an assassin for XOF, Quiet later defected to Diamond Dogs after being defeated by Venom Snake. Quiet wore a minimal amount of clothing at all times because she could only drink or breathe through her skin following parasite-treatment due to the serious injuries she had sustained while trying to kill Big Boss during the hospital raid; wearing too much clothing would lead to suffocation.
          <br /> <br />
          After being defeated by Venom Snake in Afghanistan following a tense sniper duel, Quiet became a prisoner at Mother Base until she was allowed to accompany Venom Snake on missions as a buddy. Her weapons included two lethal sniper rifles nicknamed Wicked Butterfly and Sinful Butterfly as well as the non-lethal Guilty Butterfly.
          <br /> <br />
          </p>
          <center> 
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/9f/32/66/9f326695b71b385ffcb2683306cd66a0--metal-gear-quiet-metal-gear-solid-quiet.jpg" alt="MgsvQuiet" />
          <br /><br />
          <h4>Biography</h4>
          </center>
          <hr />
          <p>
          An elite XOF assassin who took orders directly from Skull Face, Quiet was sent to kill Big Boss, who was going by the name "Ahab." During the hospital raid on March 11, 1984, she had her sights on him and killed the nurse and the doctor in attendance at the hospital during the raid. She told her superior that she hadn't killed her target yet as "the man in the next bed [Ishmael] had seen [her] face." She then tried to kill Ahab, only for Ishmael to fight her off by jumping on her back mere seconds before she could pull the trigger. After fighting Ishmael off and attempting to strangle Ahab, she was pelted with a bottle of medical grade ethanol, allowing Ishmael to light her on fire. However, despite being immolated, she still proved to be determined to try and kill Ahab, resulting in her being doused with another set of chemicals that refuelled the fire to an unbearable degree and caused her to fall out of a nearby window.
          <br /> <br />
          Ultimately, she survived, although with severe enough injuries to force herself to be infected with a mutant strain of the "the one that covers" parasites used to create the Parasite Unit which managed to repair most of her physical damage, grant her superhuman speed, perception, durability, longevity, phasing and invisibility. It also allowed her to breathe through her skin and take in nutrients via photosynthesis or small showers, effectively removing the need for food, drinking or breathing.
          <br /> <br />
          In 1984, Skull Face had Quiet deployed to Afghanistan where she was tasked with eliminating Soviet officers who were against the development of Metal Gear Sahelanthropus. She eventually caught sight of Venom Snake and proceeded to open fire on him, initiating a duel. Although Kazuhira Miller wanted her dead due to being a Cipher agent, Venom Snake, after defeating her in the duel, ultimately decided to apprehend her and bring her back to Mother Base at Ocelot's suggestion.
          <br /> <br />
          During the flight back to Mother Base, Quiet uncuffed herself and seemingly escaped from the chopper, although she secretly stayed invisible while still inside the helicopter. Before arriving at Mother Base, the chopper came under attack by a pursuing fighter jet; Quiet then revealed herself, took aim, and fired a single sniper round through the closed cockpit of the enemy aircraft, killing the pilot and saving Venom Snake's life in the process.
          <br /> <br />
          Despite this heroic act, Miller still didn't trust her, and gave orders to prevent a landing if Quiet was still on board. However, she effectively surrendered herself into Diamond Dogs custody. Despite Miller's insistence that they kill her due to her being too much of a liability, Ocelot and Venom Snake instead decided to lock her up. Venom Snake agreed that she might have to be killed if she proved to be too much of a threat to Diamond Dogs' existence, adding that he would be the one to "pull the trigger" should that situation ever arise.
          <br /> <br />
          </p>
          <center>
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/ac/12/bf/ac12bf7bb46195b9046eadcbdba77aa1.jpg" alt="QueitColor"/>
          </center>
          <br /> <br />
          <p>
          While Miller was extremely prejudiced against her, Ocelot was willing to let her prove her worth. Because she was unable to speak English, she could not communicate with any of Diamond Dog personnel. Messages from her often had to be conveyed through actions. During her days at Mother Base, she was cooperative with anything Diamond Dogs requested of her; the only exception was that she refused to wear clothes, and anyone who tried to put clothes on her ended up injured to the point of needing breathing tubes. Ocelot purposely locked her in a cell with a lock which he described as "a joke" to bait her into revealing her motives.
          <br /> <br />
          This proved to be pointless as she changed her mind about wiping out Diamond Dogs. Ocelot later suggested Snake take her along on missions to form a bond, hoping it would make her break her silence as she refused any form of communication, even writing. Later on, she snuck out of her cell to accompany Venom Snake on a mission, only to be caught by Miller, who was dead set against the idea. Ocelot, however, decided she could prove extremely useful in the field.
          <br /> <br />
          Some time later, Quiet attacked a Diamond Dog personnel for unknown reasons, since she couldn't communicate as to why. Two operatives came to the personnel's aid only to be beaten down by her. Venom Snake intervened and subdued her, with the help of Ocelot, who gave her a sedative. She was taken back to her cell, with Venom Snake telling Ocelot that if she were attempt to escape again, "there [wouldn't] be a third [time]." It was later revealed that she attacked the man in question because he was infected with the Kikongo strain of the vocal cord parasite. After destroying and recovering Metal Gear Sahelanthropus, Quiet stood next to Miller during his speech, alongside the other leading members, Venom Snake and Ocelot.
          <br /> <br />
          At some point, she also ended up retrieving a treasured item of the Mbele Squad, a necklace that had formerly belonged to their leader, Shabani, after it had ended up discarded into a vat of chlorine disinfectant (it was implied that Eli had discarded the necklace), although at the cost of having significant portions of her skin burned from exposure to the gas.
          <br /> <br />
          After undergoing an MRI, it was revealed that Quiet was the assassin who had been sent to kill Snake after he awoke in Cyprus, as they found a Star-of-Bethlehem petal inside the burnt remains of her own lungs. The medical team also discovered that she had a strain of the vocal cord parasite, and the only person who could have applied the strain which had replaced her skin and internal organs, other than Code Talker, was Skull Face. Miller demanded that she be executed, but Ocelot calmed him down, pointing out that if she had been sent to kill them all, she would have done so already. Ocelot also stated that she worked for Venom Snake as she was in love with the legend. At this observation, Quiet merely watched Venom Snake and did not indicate denial.
          <br /> <br />
          Venom Snake concurred with Ocelot, much to Miller's chagrin. He deduced that she must have decided not to speak, or even write, English in order to avoid infecting Mother Base with the strain of the parasite inside her. He then freed Quiet from her restraints. After the three men left, Code Talker approached her and spoke to her in Navajo. Replying back in Navajo, Quiet revealed that Skull Face intended to use her as his ace in the hole against Venom Snake and his army by having herself be captured so that she could be taken to Mother Base to infect everyone with the parasite and she had been given the English strain. Explaining this to Code Talker, Quiet declared fiercely that she would never speak English again and risk another pandemic.
          <br /> <br />

          </p>
          <center>
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/06/ac/be/06acbe2b39d68b6fc523bd3105c5df2a--metal-gear-art-metal-gear-solid-concept-art.jpg" alt="QuietSolo" />
          </center>
          <br /> <br />
          <p>
          After a second parasite outbreak occurred on Mother Base, this time due to a mutation of the parasites within the previously infected personnel, Quiet believed she could be a risk despite keeping silent and left Diamond Dogs. She later went MIA in Afghanistan and was captured by Soviet forces. She was forcibly clothed when taken prisoner, which slowly suffocated her and removed her abilities. She tried to escape but was caught and nearly drowned by one of her captors, who then attempted to rape her, removing the pants they put on her.
          <br /> <br />
          Now able to breathe once more and her abilities restored by the water, Quiet retaliated, mutilating and slaughtering him and the other soldiers. Venom Snake had been trying to track her down to take her back to Mother Base, arriving just in time to catch the final moments of her escape. Venom intended to free her but Quiet disposed of the soldiers herself, returning with weapons for herself and Venom Snake. The two then worked together to take down a massive tank unit that had arrived in response to Quiet's escape. Unfortunately, she was badly injured by a tank round and knocked unconscious.
          <br /> <br />
          Venom Snake attempted to carry her out of harm's way through a fearsome sandstorm. He protected her and prevented Quiet from alerting a nearby convoy of their presence when she regained consciousness. Along the way, while hiding from the overwhelming number of enemies on their tail, he was bitten by a cobra, causing him to lose consciousness, both of them now blacked out and resting behind a rock. Thanks to the sandstorm, they were able to remain hidden and the convoy and patrolling troops moved on. Quiet woke up first when she heard Pequod attempting to contact Venom Snake through his radio, explaining that he wouldn't be able stay at the LZ much longer due to near-zero visibility in the sandstorm. Quiet replied in Navajo, which Pequod didn't understand and thought was just a radio problem. Thus, Quiet had no choice but to reply in English, much to Pequod's surprise, and guide the chopper to their location.
          <br /> <br />
          Eventually, Venom Snake was given an antivenom and regained consciousness, but Quiet was nowhere to be found. He went to search for her by tracking her footprints, only finding a cassette tape hanging from a tree branch. He put the tape into his iDroid and began to listen:
          <br /> <br />
          <center>
          "I did not choose to be Quiet. I wanted to express my feelings to you. If only we shared a common tongue. Vengeance was what drove me to them...The only language left to me, revenge. But the words we shared...No, that was no language at all. That's why I...I chose the language of gratitude instead, and go back to silence. I am Quiet...I am...the absence of words."
          ―Quiet
          </center>
          <br /> <br />
          Afterwards, Code Talker contacted Venom Snake to summarize Quiet's actions and inquired as to why she did not release the parasites on Mother Base. Code Talker stated that "We wouldn't hear it from her."
          <br /> <br />
          </p>
          <center>
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/10/0d/8d/100d8de325c9373e7ddb7353a732c689--metal-gear-quiet-metal-gear-solid.jpg" alt="QuietSnake" />
          </center>
          <br /> <br />
          <p>
          Quiet, as an XOF operative, was an extremely efficient and ruthless individual, viciously murdering two innocent hospital personnel without hesitation or remorse. She was also very dedicated to her job and was willing to do anything to get her mission done, taking the horrific pain of being lit completely aflame for several seconds before finally succumbing to the agony. She also fought as relentless as she could, even attempting suicide, when Venom Snake attempted to capture her. She was also able to withstand continued torture while barely making a sound.
          <br /> <br />
          However, the more time she spent at Mother Base, the more she began to change into a more caring and moral individual. After her capture, she was mostly indifferent and apathetic towards her situation but took an interest in Snake. Upon reaching maximum bond level, it's implied that Quiet developed romantic feelings for Snake, and in turn became a more benevolent person. Her examples of humanity/benevolence, and compassion, included playing with Snake in the rain, lighting Snake's cigar for him for his birthday, staring at him affectionately in the ACC, and even risking her life to save a child's memento.
          <br /> <br />
          </p>
          <center>
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/10/fe/e2/10fee278e3733b6d419fe7ad532ee073--maul-metal-gear-solid.jpg" alt="SnakeAndQuiet" />
          </center>
          </div>
        <QuietBox />
        </Modal>
      </div>
    );
  }
}