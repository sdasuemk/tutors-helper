import React from 'react';
import InsideSmallBox from './InsideSmallBox';
import AssignmentAreaChart from './charts/AssignmentAreaChart';
import BoxComponent from './charts/BoxComponent';
import FeesPayStatus from './charts/FeesPayStatus';
import StudentInOutLine from './charts/StudentInOutLine';
import StudentsClassPie from './charts/StudentsClassPie';
import styles from './dashboard.module.css';

const Dashboard = () => {
  return (
    <section>
      <section className={styles.topRectangle}>
        <InsideSmallBox
          width={500}
          height={128}
          //backgroundColor='pink'
          chartToDisplay={<AssignmentAreaChart />}
        />
        <InsideSmallBox
          width={256}
          height={128}
          //backgroundColor='pink'
          chartToDisplay={<FeesPayStatus />}
        />
      </section>
      <section className={styles.middleRectangle}>
        <InsideSmallBox
          width={256}
          height={270}
          //backgroundColor='yellow'
          chartToDisplay={<StudentInOutLine />}
        />
        <InsideSmallBox
          width={256}
          height={270}
          //backgroundColor='pink'
          chartToDisplay={<StudentsClassPie />}
        />
        <InsideSmallBox width={256} height={270} backgroundColor='black' />
      </section>
      <section className={styles.bottomRectangle}>
        <InsideSmallBox
          width={200}
          height={75}
          backgroundColor='none'
          chartToDisplay={
            <BoxComponent
              height={75}
              width={200}
              boxLabel='Total Students'
              boxValue={50}
              checkerTotal={50}
              thresholdMark={0}
              colorShade='rgb(22, 23, 22)'
              // changeType='forward'
            />
          }
        />
        <InsideSmallBox
          width={200}
          height={75}
          backgroundColor='none'
          chartToDisplay={
            <BoxComponent
              height={75}
              width={200}
              boxLabel='Fees paied by'
              boxValue={20}
              checkerTotal={50}
              thresholdMark={5}
              colorShade='rgb(48, 186, 94)'
              changeType='forward'
            />
          }
        />
        <InsideSmallBox
          width={200}
          height={75}
          backgroundColor='none'
          chartToDisplay={
            <BoxComponent
              height={75}
              width={200}
              boxLabel='Total Fees amount (Rs.)'
              boxValue={30000}
              checkerTotal={30000}
              thresholdMark={0}
              colorShade='rgb(9, 7, 122)'
              changeType='forward'
            />
          }
        />
        <InsideSmallBox
          width={200}
          height={75}
          backgroundColor='none'
          chartToDisplay={
            <BoxComponent
              height={75}
              width={200}
              boxLabel='Fees received (Rs.)'
              boxValue={18000}
              checkerTotal={30000}
              thresholdMark={10}
              colorShade='rgb(20, 105, 48)'
              changeType='forward'
            />
          }
        />
        <InsideSmallBox
          width={200}
          height={75}
          backgroundColor='none'
          chartToDisplay={
            <BoxComponent
              height={75}
              width={200}
              boxLabel='Fees pending (Rs.)'
              boxValue={30000 - 25000}
              checkerTotal={30000}
              thresholdMark={10}
              colorShade='rgb(128, 8, 14)'
              changeType='reverse'
            />
          }
        />
      </section>
    </section>
  );
};

export default Dashboard;
