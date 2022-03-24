import { useAppDispatch, useAppSelector } from '@/app/hook';
import { addTag, removeTag, selectArticle } from '@/features/articleSlice';
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
      let isExist = article.tagList.includes(tag);
      if (!isExist) {
        dispatch(addTag(tag));
      }
      setTag('');
    }
  };
  const handleTagInputKeyDown = (e: any) => {
    if (['Enter', 'Tab', 'Comma'].includes(e.key)) {
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

      <div>
        {article.tagList.map((tag, index) => (
          <span key={index}>
            <div onClick={() => dispatch(removeTag(tag))}>X</div>
            {tag}
          </span>
        ))}
      </div>
    </fieldset>
  );
};

export default TagInput;
