import React, { Component } from "react";
import TheBoss from '../bios/1-TheBoss'
import BigBoss from '../bios/2-BigBoss'
import SolidSnake from '../bios/3-SolidSnake'
import LiquidSnake from '../bios/4-LiquidSnake'
import SolidusSnake from '../bios/5-SolidusSnake'
import RevolverOcelot from '../bios/6-RevolverOcelot'
import Raiden from '../bios/7-Raiden'
import Eva from '../bios/8-Eva'
import Quiet from '../bios/9-Quiet'
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardGroup } from 'reactstrap';
export default class Home extends Component {
    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                <CardGroup>
                  <Card>
                    <CardImg className="box"  width="100%" src="https://i.pinimg.com/474x/4b/cf/84/4bcf844aadaa513cfdac4edc104177b6--gear-art-metal-gear-solid.jpg" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>The Boss</CardTitle>
                      <CardSubtitle>The Mother of Special Forces</CardSubtitle>
                      <br />
                      <TheBoss />
                    </CardBody>
                  </Card>
                  <Card>
                    <CardImg className="box"  width="100%" src="https://i.pinimg.com/474x/45/80/7b/45807b43910c40e7c7284324f13524de.jpg" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Big Boss</CardTitle>
                      <CardSubtitle>The Man Who Sold The World</CardSubtitle>
                      <br />
                      <BigBoss />
                    </CardBody>
                  </Card>
                  <Card>
                    <CardImg className="box" width="100%" src="https://cdna.artstation.com/p/assets/images/images/000/450/690/20150203203053/smaller_square/marc-lee-oldsnake-marc.jpg?1423017054" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Solid Snake</CardTitle>
                      <CardSubtitle>The Legendary Hero</CardSubtitle>
                      <br />
                      <SolidSnake />
                    </CardBody>
                  </Card>
                </CardGroup>
                <br /> <br />
                <CardGroup>
                  <Card>
                    <CardImg className="box" width="100%" src="https://i.pinimg.com/474x/04/46/f5/0446f512f456cf8ee4b085d80bd8c597--liquid-snake-metal-gear-solid.jpg" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Liquid Snake</CardTitle>
                      <CardSubtitle>The Prodigal Son</CardSubtitle>
                      <br />
                      <LiquidSnake />
                    </CardBody>
                  </Card>
                  <Card>
                    <CardImg className="box" width="100%" src="https://i.pinimg.com/474x/a1/36/39/a13639692a5debb9e5acb2425590a857.jpg" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Solidus Snake</CardTitle>
                      <CardSubtitle>The Leader of Dead Cell</CardSubtitle>
                      <br />
                      <SolidusSnake />
                    </CardBody>
                  </Card>
                  <Card>
                    <CardImg className="box" width="100%" src="https://i.pinimg.com/474x/f3/b5/05/f3b5054802728a23ebef3e8ea44da0d9--revolver-ocelot-metal-gear-solid.jpg" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Revolver Ocelot</CardTitle>
                      <CardSubtitle>The Last Gunslinger</CardSubtitle>
                      <br />
                      <RevolverOcelot />
                    </CardBody>
                  </Card>
                </CardGroup>
                <br /> <br />
                <CardGroup>
                  <Card>
                    <CardImg className="box" width="100%" src="https://i.pinimg.com/474x/b9/61/f6/b961f688304fe58104dc521afee98def--metal-gear-solid-scifi.jpg" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Raiden</CardTitle>
                      <CardSubtitle>Jack The Ripper</CardSubtitle>
                      <br />
                      <Raiden />
                    </CardBody>
                  </Card>
                  <Card>
                    <CardImg className="box" width="100%" src="https://i.pinimg.com/474x/a7/5e/87/a75e870c7a3e96296e3dde91d2a2999c--metal-gear-solid-game-art.jpg" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>EVA</CardTitle>
                      <CardSubtitle>The Sleeper Agent</CardSubtitle>
                      <br />
                      <Eva />
                    </CardBody>
                  </Card>
                  <Card>
                    <CardImg className="box" width="100%" src="https://i.pinimg.com/474x/6a/0b/2d/6a0b2d6a674a5e074bb3679a963ed3f3--metal-gear-solid-game-art.jpg" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Quiet</CardTitle>
                      <CardSubtitle>The Sniper Assassin</CardSubtitle>
                      <br />
                      <Quiet />
                    </CardBody>
                  </Card>
                </CardGroup>
                </div>
            </div>
        )
    }
}