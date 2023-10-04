import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Parallax from "/components/Parallax/Parallax.js";
import styles from "/styles/jss/nextjs-material-kit/pages/components.js";

import i18next from 'i18next';
import { defaultLanguage } from '../i18n';

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const { t } = i18next
  return (
    <div>
      <Header
        brand="Home"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />

      <Parallax image="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80">

        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.subtitle}>{t('ALL DISCOUNTS JUST FOR YOU subtitl', { ns: 'meta' })}</h1>
                <h3 className={classes.title}>
                  {t('FIND BEST RENTAL BIKE', { ns: 'meta' })}
                </h3>

              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
    <h1>{t('FIND BEST RENTAL BIKE', { ns: 'meta' })}Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aspernatur mollitia praesentium veniam temporibus dolorum aliquid non quas modi dicta sapiente quo officiis, qui explicabo voluptatibus ut vitae eaque cum ducimus facilis delectus. Unde odit, deserunt deleniti fuga, ipsa id reiciendis expedita aperiam vel nemo explicabo laboriosam eius sequi ad eaque tempore voluptates a, soluta consectetur cupiditate excepturi incidunt. Est velit officia minus atque debitis obcaecati voluptas? Beatae distinctio eligendi a, sunt autem minus dolore, suscipit cum officia totam voluptatum esse laborum in corrupti incidunt officiis nulla eveniet? Laborum, aspernatur natus. Impedit, similique perspiciatis quidem cum ex exercitationem? Illum, officia.</h1>

      </div>

    </div>
  );
}
