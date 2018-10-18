import React from 'react';
import Modal from 'react-responsive-modal';
import EvaBox from '../8-Eva-Comments/EvaBox'
import { Button } from 'reactstrap';
import EvaStats from '../characters/EvaStats';
import { ModalHeader } from 'reactstrap';
 
export default class Eva extends React.Component {
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
        <img className="boxmodal" width="100%" src="https://i.ytimg.com/vi/SK0v8EFp3ww/maxresdefault.jpg" alt="EvaHero" />
        </div>
        <div className="main">
          <center>
          <p>
          <br/>
          "You and the beasts are no different... <br />Scorched shadows born
            to the world. When a beast steps into the light... <br />Unless
            the light is put out... The shadows cannot be erased. <br />So
            long as there is light... There is shadow. <br />To return
            everything to normal... The light must be extinguished."<br /> <br />
          </p>
          <h2>-Eva</h2>
          </center>
          <EvaStats />
          <p>
          <br /> 
          EVA, also known as Tatyana, and later known as Matka Pluku, and Big Mama, was a spy who fought alongside Naked Snake during Operation Snake Eater. While posing as a KGB agent, she actually worked as a spy for the Chinese People's Liberation Army, tasked with obtaining the Philosophers' Legacy. She later became the surrogate mother of Solid Snake and Liquid Snake.
          <br /> <br />
          EVA was born in Meridian, Idaho, on May 15, 1936. At some point in her childhood, prior to the start of World War II, she, along with several other children across the world, were taken by the Philosophers and raised in a joint U.S.-Soviet-Chinese facility, receiving spy training at one of the Philosophers' "charm schools," so she could become a "sleeper agent." As a result of this, she was indistinguishable from any other native-born American.
          <br /> <br />
          EVA eventually joined the Chinese People's Liberation Army General Staff Headquarters - Second Division. There, she learned techniques such as "bandit shooting," a horizontal sweep using the Chinese Type 17 Mauser pistol.
          <br /> <br />
          </p>
          <center> 
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/c9/20/5e/c9205e4d052fc4b4c5af216f65889291--snake-eater-mgs.jpg" alt="Mgs3Eva" />
          <br /><br />
          <h4>Biography</h4>
          </center>
          <hr />
          <p>
          Prior to the CIA's Virtuous Mission in 1964, EVA, posing as KGB operative Tatyana, was sent to Tselinoyarsk to oversee the development of Nikolai Sokolov's Shagohod and retrieve data on the weapon. A few days later, she was taken prisoner by Colonel Volgin, along with Sokolov, during the theft of the Shagohod by GRU forces. By posing as Sokolov's lover, and pretending to serve the Colonel, she successfully infiltrated the Soviet military fortress of Groznyj Grad, while Sokolov was forced to continue his work on the Shagohod.
          <br /> <br />
          More than a week later, EVA met Naked Snake in Tselinoyarsk, during Operation Snake Eater, as a supposed KGB spy sent by Soviet leader Nikita Khrushchev, and one of the former NSA code breakers who had defected in 1960 along with ADAM. She used her position in Groznyj Grad to supply Snake with information relating to Tselinoyarsk and its environment and to acquire intelligence on the Shagohod. EVA considered killing Volgin's subordinate, Major Ocelot, following a brief battle, in order to cover their tracks, but Snake convinced her not to, so she instead decided to rush back to Volgin before Ocelot returned to maintain her cover.
          <br /> <br />
          Afterwards, EVA (as Tatyana) was tortured by Volgin in order to coerce an uncooperative Sokolov into completing the Shagohod's development. When it began to rain, Volgin decided to have her "entertain" him until the weather cleared. Throughout their respective missions, EVA and Snake began to develop romantic feelings for one another, but Snake was initially hesitant. EVA later stole C3 explosives, from a vault containing Western weapons for research purposes, which she would later provide to Snake. She also suggested that he disguise himself as Volgin's subcommander and lover, Major Ivan Raidenovitch Raikov, due to Raikov having access to Sokolov's location, and was of a similar build to Naked Snake. She also supplied her plan of escaping from Tselinoyarsk via a WIG that she stole before returning back to Groznyj Grad. She, in her disguise as Tatyana, was later threatened by Ocelot when he strongly suspected her of being the spy feeding Snake information with the recently deceased The Fear's crossbow. However, she was then told by Ocelot that she had "nice boots" in a subtle way of hinting that she's wearing the wrong boots (having left her officer boots back at the ruins). In addition, after Snake mentioned that he saw Tatyana again from his scouting, Zero reported that he hasn't found Tatyana under any of the data they found, suggesting that she was either obscure to the point of their having overlooked her, or that she was an important enough VIP for the KGB to have her details extremely classified.
          <br /> <br />
          </p>
          <center>
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/f6/f5/7c/f6f57c7977274925939ad9b724ad8361--videogame-art-metal-gear-solid.jpg" alt="Mgs3Eva"/>
          </center>
          <br /> <br />
          <p>
          EVA later recovered the Shagohod data from Sokolov, and proceeded to interrogate him in regards to the location of the Philosophers' Legacy, threatening him with her supposed "Kiss of Death." When he was unable to answer, she revealed her bluff by using her lipstick. Unbeknownst to EVA, Snake eavesdropped on the two after having successfully infiltrated Groznyj Grad, though he was eventually captured by Volgin shortly thereafter. She then bore witness to Volgin's torture of Sokolov, where she vainly attempted to stop the Colonel brutally beating the scientist by proclaiming his innocence, eventually expressing disgust after Volgin seemingly killed the scientist. While observing Volgin's subsequent torture of Snake, she eventually learned the location of the Philosophers' legacy when the Colonel arrogantly divulged its location openly to Snake. EVA nearly broke her cover as the torture continued, and was nearly killed by a suspicious gun-toting Ocelot, before Snake put himself between the two, costing him the use of his right eye in the process.
          <br /> <br />
          EVA organized an escape route for Snake when he eventually broke out of Groznyj Grad's prison, though the path was blocked by GRU soldiers, forcing Snake to risk his life by jumping from a waterfall. Afterwards, EVA met with Snake at Tikhogornyj, revealed the C3 she had stolen earlier, and gave it to Snake to aid him in destroying the Shagohod. She would also plant some of the C3 on a nearby rail bridge to prevent Volgin's forces from following them, when they made their escape. In addition, she also modified the C3 on the bridge with detonators that activate if touched, having anticipated the possibility that the GRU soldiers would discover them, and thus ensure that they don't remove them.
          <br /> <br />
          However, EVA's deception was discovered by Volgin when she attempted to steal the Philosophers' Legacy from the underground vault, and was nearly killed by the Colonel until The Boss volunteered to execute her personally in reality, The Boss was actually trying to get her out of harm's way). Later, after the Shagohod and Volgin survived Snake's attempted sabotage, EVA came up with the plan to lure Volgin to the C3-laden rail bridge to destroy it. When that plan failed, EVA helped Snake defeat Volgin and the Shagohod once and for all by distracting Volgin while Snake shot at him. She eventually broke down after witnessing Volgin's seeming violent death.
          <br /> <br />
          During their escape through Lazorevo, EVA became distracted by her motorcycle's ruptured fuel tank, causing the bike to crash. She received two lacerations: one a wound to her abdomen after being impaled on a tree branch, and another, lesser laceration on her left shoulder, although she survived thanks to Naked Snake, using Para-Medic's medical advice. She later helped Snake escape from Tselinoyarsk by piloting a WIG she had arranged to be located at Rokovoj Bereg, making a brief stop in Galena, Alaska. After she and Snake share a night of passion, EVA disappears the next morning, leaving an audio tape behind to explain her actions. In this tape, she revealed that she had been ordered to kill anyone who knew about her mission, though she made the distinct decision not to kill him as he slept on the cabin floor; not because they had fallen in love, but because she had promised The Boss not to. She also revealed that The Boss's true mission had been to recover the Legacy, by pretending to defect, with the knowledge that she would have to die to prove America's innocence to the Soviets, following the nuclear destruction of Sokolov's research facility.
          <br /> <br />
          </p>
          <center>
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/f1/c5/56/f1c556280f95508e5efe610ce04d3cf1--metal-gear-solid--post-metal.jpg" alt="ShagohadEva" />
          </center>
          <br /> <br />
          <p>
          EVA retrieved the microfilm containing the Philosophers' Legacy and the Shagohod's missile launch data for the Chinese government. With the launch data, the Chinese government eventually developed its own nuclear weapons technology later that year. However, the microfilm that EVA recovered turned out to be a fake. Unbeknownst to her, half of the real Legacy made it back into the hands of the CIA thanks to Ocelot. This blunder cost EVA her job at PLA Intelligence and she was expelled from China.
          <br /> <br />
          Around the same time, Snake tried to locate EVA but could not find any trace of her. EVA disappeared in Hanoi during the Vietnam War in 1968 according to official records.
          <br /> <br />
          Circa 1971, EVA was reunited with Big Boss (Naked Snake) after he rescued her in Hanoi. After traveling to America, she joined Zero's new organization, the Patriots, whose initial members included Big Boss, Para-Medic (Dr. Clark), Sigint and Ocelot, a.k.a. ADAM from Operation Snake Eater.
          <br /> <br />
          In 1972, EVA volunteered to serve as a surrogate mother for the Les Enfants Terribles project designed to clone Big Boss and maintain his image as an icon for the organization. She was originally implanted with eight clone fetuses, though six were intentionally aborted in order to encourage stronger growth in the remaining two. EVA later gave birth to the clones who would become known as Solid Snake and Liquid Snake. Despite the fact that Big Boss disapproved and left the group to form his own private military company in opposition to Zero's methods, EVA saw the clones as her own children but left the Patriots in support of Big Boss.
          <br /> <br />
          EVA would remain in contact with Big Boss, passing on cassette tape recordings to his Militaires Sans Frontières in 1974. In them, she detailed further information on The Boss's final mission in Groznyj Grad, and the motivations behind her actions, having been entrusted to pass this on to him. These tapes were later supplied to Big Boss by MSF's subcommander Kazuhira Miller, with the latter explaining that they were delivered with no return address except with the name EVA, with Big Boss hesitantly explaining that she was an "old acquaintance."
          <br /> <br />
          After the destruction of Mother Base, Zero and EVA had Big Boss and his soon to be look-a-like Venom Snake moved to a hospital in Cyprus where the former was protected by Ocelot (although he was surprised that EVA was following Zero's orders).
          <br /> <br />
          After young rookie Solid Snake unexpectedly foiled Big Boss's coup d'état in Zanzibar Land, the Patriots put Big Boss in a nanomachine-induced coma. EVA and Ocelot enlisted the assistance of Naomi Hunter and Gray Fox to kill Para-Medic (Dr. Clark) in 2003. Ocelot killed Donald Anderson (Sigint) himself during the Shadow Moses Incident, but Zero was the last one alive and was still in hiding. Some time after Solidus Snake's Big Shell Incident, EVA fled to Eastern Europe and became "Big Mama", leader of the Paradise Lost Army. In addition to taking in war orphans, she worked to stop Zero's proxy-AIs and the war economy forever.
          <br /> <br />
          </p>
          <center>
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/8b/3f/e6/8b3fe67cea16426e89cdf3d208026980--metal-gear-solid-art-metal.jpg" alt="BigMomma" />
          </center>
          <br /> <br />
          <p>
          In 2014, during Old Snake's mission to terminate Liquid Ocelot, Raiden revealed that he had worked with Big Mama to steal Big Boss's body from the Patriots in exchange for help in rescuing Sunny. Snake went to Eastern Europe to find the body and keep it out of Ocelot's hands.
          <br /> <br />
          Snake followed a member of the Paradise Lost Army and ultimately reached Big Mama's hideout. There, she revealed to him the creation of the Patriots. She also revealed Big Boss's body, which was being kept alive, but unconscious, by nanomachines. However, in reality, this was really Solidus's body as Big Mama had acquired it to stand in as a ruse while she was repairing the damage done to Big Boss's real body, with parts from Liquid and Solidus, as well as waiting for the AI system to be brought down so Big Boss could be revived from his nanomachine-induced coma.
          <br /> <br />
          Soon after, it was discovered that a trio of Dwarf Gekko had followed Snake to the hideout, and PMCs were closing in on them. As EVA, members of the resistance, and Snake moved out, decoy vans were set to allow the van with the corpse of "Big Boss" to get away. Riding with EVA on her motorcycle, Snake protected her and the van from PMCs in a frantic chase through the city (which she also quickly recovered after being sniped by a Haven Trooper), until Raging Raven's continuous attacks caused them to crash. EVA fell from the motorcycle and became impaled on a protruding spike, in a manner identical to her bike crash in Tselinoyarsk, fifty years earlier. After Snake defeated Raven, he tended to the injured Big Mama, and they headed for their getaway cruiser and the corpse of "Big Boss" only to find Ocelot waiting for them. After Liquid beat Snake with CQC techniques and defeated Meryl Silverburgh and her troops by activating Guns of the Patriots, Ocelot had Vamp toss the corpse of "Big Boss" to Snake and EVA as it burnt (since Ocelot no longer needed Big Boss's DNA). EVA, in an exhausted and hallucinatory state, threw herself into the fire in order to save "Big Boss." Snake saved her from Ocelot's gunshot but badly burnt the left side of his face in the process. Snake held his "mother" in his arms until the moment she died.
          </p>
          <center>
          <img height="100%" width="70%" src="https://i.pinimg.com/474x/c0/70/cf/c070cf6dedf18140acc38c1dfd55902f--gamer-news-metal-gear-solid.jpg" alt="mgs3Bridge" />
          </center>
          </div>
        <EvaBox />
        </Modal>
      </div>
    );
  }
}