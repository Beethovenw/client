// @flow
import * as React from 'react'
import {Box2, Button, CopyText, Icon, InfoNote, MaybePopup, Text} from '../../common-adapters'
import {globalMargins, isMobile, platformStyles, styleSheetCreate} from '../../styles'

type Props = {
  federatedAddress: string,
  onClose: () => void,
  stellarAddress: string,
  username: string,
}

const ReceiveModal = (props: Props) => (
  <MaybePopup onClose={props.onClose}>
    <Box2 direction="vertical" style={containerStyle}>
      <Icon
        type={isMobile ? 'icon-wallet-receive-64' : 'icon-wallet-receive-48'}
        style={{marginBottom: globalMargins.small}}
      />
      <Text type="BodySmallSemibold">{props.username}’s wallet</Text>
      <Text type="Header" style={{marginBottom: globalMargins.medium}}>
        Receive
      </Text>
      <Text
        type="Body"
        style={{
          marginBottom: globalMargins.medium,
          textAlign: 'center',
        }}
      >
        To receive Lumens or assets from non-Keybase users, pass your Stellar addresses around:
      </Text>
      <Box2
        direction="vertical"
        style={{
          marginBottom: globalMargins.tiny,
          width: '100%',
        }}
      >
        <CopyText text={props.stellarAddress} />
      </Box2>
      <Text type="Body" style={{marginBottom: globalMargins.tiny}}>
        or
      </Text>
      <Box2
        direction="vertical"
        style={{
          marginBottom: globalMargins.medium,
          width: '100%',
        }}
      >
        <CopyText text={props.federatedAddress} />
      </Box2>
      <InfoNote>
        <Text type="BodySmall" style={styles.infoNoteText}>
          Use the chat interface to request Lumens from a Keybase user.
        </Text>
      </InfoNote>
      <Button label="Close" onClick={props.onClose} type="Secondary" />
    </Box2>
  </MaybePopup>
)

const styles = styleSheetCreate({
  infoNoteText: {
    marginBottom: globalMargins.medium,
    maxWidth: 272,
    textAlign: 'center',
  },
})

const containerStyle = platformStyles({
  common: {
    alignItems: 'center',
    maxWidth: 360,
    paddingLeft: globalMargins.medium,
    paddingRight: globalMargins.medium,
  },
  isElectron: {
    paddingBottom: globalMargins.xlarge,
    paddingTop: globalMargins.xlarge,
    textAlign: 'center',
  },
  isMobile: {
    paddingBottom: globalMargins.medium,
    paddingTop: globalMargins.medium,
  },
})

export default ReceiveModal
