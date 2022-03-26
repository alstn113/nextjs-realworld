import { useAppDispatch, useAppSelector } from '@/app/hook';
import { addTag, removeTag, selectArticle } from '@/features/articleSlice';
import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';

const TagInput = () => {
  const dispatch = useAppDispatch();
  const article = useAppSelector(selectArticle);

  const [tag, setTag] = useState<string>('');
  const changeTagInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };
  const handleAddTag = () => {
    if (!!tag) {
      const isExist = article.tagList.includes(tag.trim());
      if (!isExist) {
        dispatch(addTag(tag));
      }
      setTag('');
    }
  };
  const handleTagInputKeyDown = (e: any) => {
    if (['Enter', 'Tab', ','].includes(e.key)) {
      if (e.key !== 'Tab') {
        e.preventDefault();
      }
      handleAddTag();
    }
  };
  return (
    <fieldset>
      <input
        type="text"
        placeholder="Enter tags"
        value={tag}
        onChange={changeTagInput}
        onBlur={handleAddTag}
        onKeyDown={handleTagInputKeyDown}
      />

      <TagList>
        {article.tagList.map((tag, index) => (
          <span key={index}>
            <button onClick={() => dispatch(removeTag(tag))}>X</button>
            {tag}
          </span>
        ))}
      </TagList>
    </fieldset>
  );
};

const TagList = styled('div')`
  display: flex;
  span {
    display: flex;
    margin: 1rem;
    button {
      margin-right: 0.5rem;
    }
  }
`;

export default TagInput;
