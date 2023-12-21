import { styled } from '@mui/material/styles';

// 为容器组件创建样式
export const StyledMainContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

// 创建带有 margin 的组件
export const StyledMargin = styled('div')(({ theme }) => ({
  margin: theme.spacing(1),
}));

// 创建带有文本居中样式的组件
export const StyledActionDiv = styled('div')({
  textAlign: 'center',
});
