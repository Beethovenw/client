// @flow
import * as I from 'immutable'
import * as Constants from '../../../../constants/chat2'
import * as RouteTree from '../../../../actions/route-tree'
import * as Chat2Gen from '../../../../actions/chat2-gen'
import {ChannelHeader, UsernameHeader} from '.'
import {
  branch,
  compose,
  renderComponent,
  connect,
  type TypedState,
  type Dispatch,
} from '../../../../util/container'
import {createShowUserProfile} from '../../../../actions/profile-gen'
import {chatTab} from '../../../../constants/tabs'

const mapStateToProps = (state: TypedState, {infoPanelOpen, conversationIDKey}) => {
  const _isPending = conversationIDKey === Constants.pendingConversationIDKey
  let meta = Constants.getMeta(state, conversationIDKey)
  if (_isPending) {
    const resolved = Constants.getResolvedPendingConversationIDKey(state)
    if (Constants.isValidConversationIDKey(resolved)) {
      meta = Constants.getMeta(state, resolved)
    }
  }
  const _participants = meta.teamname ? I.Set() : meta.participants

  return {
    _conversationIDKey: conversationIDKey,
    _isPending,
    _participants,
    badgeNumber: state.notifications.getIn(['navBadges', chatTab]),
    channelName: meta.channelname,
    infoPanelOpen,
    muted: meta.isMuted,
    smallTeam: meta.teamType !== 'big',
    teamName: meta.teamname,
  }
}

const mapDispatchToProps = (dispatch: Dispatch, {onToggleInfoPanel, conversationIDKey}) => ({
  _onCancel: () => dispatch(Chat2Gen.createSetPendingMode({pendingMode: 'none'})),
  _onOpenFolder: () => dispatch(Chat2Gen.createOpenFolder({conversationIDKey})),
  onBack: () => dispatch(RouteTree.navigateUp()),
  onShowProfile: (username: string) => dispatch(createShowUserProfile({username})),
  onToggleInfoPanel,
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  badgeNumber: stateProps.badgeNumber,
  canOpenInfoPanel: !stateProps._isPending,
  channelName: stateProps.channelName,
  infoPanelOpen: stateProps.infoPanelOpen,
  muted: stateProps.muted,
  onBack: dispatchProps.onBack,
  onCancelPending: stateProps._isPending ? dispatchProps._onCancel : null,
  onOpenFolder: stateProps._isPending ? null : dispatchProps._onOpenFolder,
  onShowProfile: dispatchProps.onShowProfile,
  onToggleInfoPanel: dispatchProps.onToggleInfoPanel,
  participants: stateProps._participants.toArray(),
  smallTeam: stateProps.smallTeam,
  teamName: stateProps.teamName,
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps, mergeProps),
  branch(props => !!props.teamName, renderComponent(ChannelHeader))
)(UsernameHeader)
