import React from 'react';
import TopFollowNav from '../../components/common/topNav/TopFollowNav';
import TabMenu from '../../components/common/tab/TabMenu';
import * as S from './Follower.style';

import test from '../../assets/images/test.svg';
import {
  SmallFollowButton,
  CancelButton,
} from '../../components/common/button/Button';

function Follower() {
  return (
    <div>
      <TopFollowNav></TopFollowNav>
      <S.FollowerWrapper>
        <ul>
          <S.FollowerUserList>
            <S.FollowerUser>
              <S.UserImage src={test} alt="user image"></S.UserImage>
              <S.Content>
                <S.ContentTitle>애월읍 한라봉 최고 맛집</S.ContentTitle>
                <S.ContentSubTitle>
                  정성을 다해 농사짓는 한라봉
                </S.ContentSubTitle>
              </S.Content>
              <S.ButtonWrapper>
                <SmallFollowButton></SmallFollowButton>
                <CancelButton></CancelButton>
              </S.ButtonWrapper>
            </S.FollowerUser>
          </S.FollowerUserList>
        </ul>
      </S.FollowerWrapper>
      <TabMenu></TabMenu>
    </div>
  );
}

export default Follower;
