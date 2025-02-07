import { formatDistanceToNowStrict } from 'date-fns';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton';
// types
import { IMail, IMailTemplate } from 'src/types/mail';

// ----------------------------------------------------------------------

type Props = ListItemButtonProps & {
  mail: IMailTemplate;
  selected: boolean;
  onClickMail: VoidFunction;
};

export default function MailItem({ mail, selected, onClickMail, sx, ...other }: Props) {
  return (
    <ListItemButton
      onClick={onClickMail}
      sx={{
        p: 1,
        mb: 0.5,
        borderRadius: 1,
        ...(selected && {
          bgcolor: 'action.selected',
        }),
        ...sx,
      }}
      {...other}
    >
      <Avatar
        alt="Name"
        src="https://api-prod-minimal-v6.pages.dev/assets/images/avatar/avatar-1.webp"
        sx={{ mr: 2 }}
      >
        {'User'.charAt(0).toUpperCase()}
      </Avatar>

      <>
        <ListItemText
          primary={mail.subject}
          primaryTypographyProps={{
            noWrap: true,
            variant: 'subtitle2',
          }}
          secondary={mail.createdBy.name}
          secondaryTypographyProps={{
            noWrap: true,
            component: 'span',
            // variant: mail.isUnread ? 'subtitle2' : 'body2',
            // color: mail.isUnread ? 'text.primary' : 'text.secondary',
          }}
        />

        <Stack alignItems="flex-end" sx={{ ml: 2, height: 44 }}>
          <Typography
            noWrap
            variant="body2"
            component="span"
            sx={{
              mb: 1.5,
              fontSize: 12,
              color: 'text.disabled',
            }}
          >
            {formatDistanceToNowStrict(new Date(mail.createdAt), {
              addSuffix: false,
            })}
          </Typography>

          {/* {!!mail.isUnread && (
            <Box sx={{ bgcolor: 'info.main', width: 8, height: 8, borderRadius: '50%' }} />
          )} */}
        </Stack>
      </>
    </ListItemButton>
  );
}
